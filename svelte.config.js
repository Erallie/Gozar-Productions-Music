import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "svelte-adapter-github";

const config = {
	kit: {
		adapter: adapter({
			cname: "music.gozarproductions.com",
			// Options for the adapter can be specified here
			// For example, you can specify the branch to deploy to
			// branch: 'gh-pages',
		}),
		// No need to set paths.base, the adapter handles it
	},
	preprocess: vitePreprocess(),
};

export default config;
