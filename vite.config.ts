import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";
import postcss from "@vituum/vite-plugin-postcss";

// https://vitejs.dev/config/
export default defineConfig({
	preview: {
		port: 2217,
	},
	plugins: [
		svelte(),
		vituum(),
		twig({
			root: "./src",
			data: ["./src/data/**/*.json", "./src/includes/**/*.json", "./src/layouts/**/*.json"],
			ignoredPaths: ["./src/pages/**/*.json"],
		}),
		postcss(),
	],
});
