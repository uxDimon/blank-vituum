import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";
import postcss from "@vituum/vite-plugin-postcss";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@src": path.join(__dirname, "src"),
		},
	},
	build: {
		manifest: true,
	},
	preview: {
		port: 2217,
	},
	plugins: [
		svelte(),
		vituum(),
		twig({
			root: "./src",
			data: ["./src/data/**/*.json", "./src/includes/**/*.json", "./src/layouts/**/*.json"],
		}),
		postcss(),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), "src/icons-sprite")],
			symbolId: "icon-[dir]-[name]",
		}),
	],
});
