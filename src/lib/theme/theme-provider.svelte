<script lang="ts">
	import { initThemeStore } from "./theme-store.svelte"

	let { children } = $props()

	let store = initThemeStore()
</script>

<div class={store.theme}>
	{@render children()}
</div>
