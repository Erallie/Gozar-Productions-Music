import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// IMPORTANT for GitHub Pages:
			pages: "docs",
			assets: "docs",
			fallback: "404.html",
		}),
		prerender: {
			handleHttpError: "warn",
		},

		paths: {
			base:
				process.env.NODE_ENV === "production"
					? "/Gozar-Productions-Music"
					: "",
		},
	},
};
export default config;
