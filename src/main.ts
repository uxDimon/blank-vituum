import "./main.css";

// js
import "./includes/test/test";

// svelte
import App from "./App.svelte";

const appEl = document.getElementById("app");
if (appEl) {
	new App({
		target: appEl,
	});
}

// export { app };
