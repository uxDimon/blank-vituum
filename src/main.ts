import "./app.css";

// js
import "./includes/test/test";

// svelte
import App from "./App.svelte";

const app = new App({
	target: document.getElementById("app"),
});

export default app;
