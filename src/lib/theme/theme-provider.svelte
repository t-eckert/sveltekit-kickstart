<script lang="ts">
	import { initThemeStore, type Theme } from "./theme-store.svelte"
	import { type Snippet } from "svelte"

	interface Props {
		childen: Snippet
		theme: Theme
	}

	let { children, theme }: Props = $props()

	let store = initThemeStore(theme)
</script>

<div class={store.theme}>
	{@render children()}
</div>
