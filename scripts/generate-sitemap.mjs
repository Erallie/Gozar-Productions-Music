import { promises as fs } from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const ROUTES_DIR = "src/routes";
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
		if (entry.name !== "+page.svelte" && entry.name !== "+page.ts") {
			continue;
		}

		const relative = path.relative(ROUTES_DIR, path.dirname(fullPath));

		let route = relative.replace(/\\/g, "/");

		// Skip dynamic routes like [slug]
		if (route.includes("[")) {
			continue;
		}

		// Remove SvelteKit route groups like (app)
		route = route.replace(/\/\([^)]*\)/g, "");

		// Add leading slash (unless it's the root page)
		route = route === "" ? "/" : `/${route}`;

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
