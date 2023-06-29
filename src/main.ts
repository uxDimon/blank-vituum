import "virtual:svg-icons-register";

// js
import "@src/includes/test/test";

// svelte
import App from "@src/modules/app/App.svelte";

const appEl = document.getElementById("app");
if (appEl) {
	new App({
		target: appEl,
	});
}
