import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		vituum(),
		twig({
			root: "./src",
			data: [
				"./src/data/**/*.json",
				"./src/pages/**/*.json",
				"./src/includes/**/*.json",
				"./src/layouts/**/*.json",
			],
			// formats: ["twig", "json.twig"],
			ignoredPaths: ["./src/pages/**/*.json"],
		}),
	],
});
