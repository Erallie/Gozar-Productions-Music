import { promises as fs } from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const ROUTES_DIR = path.resolve("src/routes");
const HOSTNAME = "https://gozarproductions.com";

async function getRoutes(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });

	let routes = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			routes.push(...(await getRoutes(fullPath)));
			continue;
		}

		// Ignore everything except +page.svelte and +page.ts
		if (entry.name !== "+page.svelte") {
			continue;
		}

		let relative = path
			.relative(ROUTES_DIR, path.dirname(fullPath))
			.split(path.sep)
			.filter(Boolean);

		const segments = relative
			.replace(/\\/g, "/")
			.split("/")
			.filter(Boolean);

		const cleaned = [];

		let skip = false;

		for (const segment of segments) {
			// Remove route groups: (group)
			if (segment.startsWith("(") && segment.endsWith(")")) {
				continue;
			}

			// Skip dynamic routes:
			// [slug], [[slug]], [...slug], [[...slug]]
			if (segment.includes("[") || segment.includes("]")) {
				skip = true;
				break;
			}

			// Skip named layouts: @foo
			if (segment.startsWith("@")) {
				skip = true;
				break;
			}

			cleaned.push(segment);
		}

		if (skip) {
			continue;
		}

		const route = cleaned.length === 0 ? "/" : "/" + cleaned.join("/");

		routes.push(route);
	}

	return routes;
}

async function generateSitemap() {
	const routes = await getRoutes(ROUTES_DIR);

	const sitemap = new SitemapStream({
		hostname: HOSTNAME,
	});

	const writeStream = createWriteStream("static/sitemap.xml");

	sitemap.pipe(writeStream);

	for (const route of routes.sort()) {
		sitemap.write({
			url: route,
		});
	}

	sitemap.end();

	await streamToPromise(sitemap);
}

generateSitemap();
