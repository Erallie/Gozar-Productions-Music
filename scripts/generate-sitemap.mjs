import { promises as fs } from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const ROUTES_DIR = path.resolve("src/routes");
const HOSTNAME = "https://gozarproductions.com";

async function getRoutes(dir, baseDir = ROUTES_DIR) {
	const entries = await fs.readdir(dir, { withFileTypes: true });

	let routes = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			routes.push(...(await getRoutes(fullPath, baseDir)));
			continue;
		}

		if (entry.name !== "+page.svelte") {
			continue;
		}

		// 👇 IMPORTANT: always compute relative to baseDir, NOT dir
		const segments = path
			.relative(baseDir, path.dirname(fullPath))
			.split(path.sep)
			.filter(Boolean);

		const cleaned = [];

		let skip = false;

		for (const segment of segments) {
			if (segment.startsWith("(") && segment.endsWith(")")) continue;

			if (segment.includes("[") || segment.includes("]")) {
				skip = true;
				break;
			}

			if (segment.startsWith("@")) {
				skip = true;
				break;
			}

			cleaned.push(segment);
		}

		if (skip) continue;

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
