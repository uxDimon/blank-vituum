<script lang="ts">
	let count: number = 0;

	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment}>
	count is {count}
</button>

<style>
	button {
		border-radius: 8px;
		border: 1px solid var(--color-main);
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		color: var(--color-text);
		background-color: var(--color-background);
		cursor: pointer;
		transition: border-color 0.25s;
	}
	button:hover {
		border-color: hsl(237, 100%, 70%);
	}
	button:focus,
	button:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}
</style>
