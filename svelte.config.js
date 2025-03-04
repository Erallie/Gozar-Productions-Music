import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "svelte-adapter-github";

const config = {
	kit: {
		adapter: adapter({
			domain: "music.gozarproductions.com",
		}),
		// No need to set paths.base, the adapter handles it
	},
	preprocess: vitePreprocess(),
};

export default config;
