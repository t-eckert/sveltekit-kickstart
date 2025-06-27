<script lang="ts">
	import { initThemeStore, type Theme } from "./theme-store.svelte"
	import { type Snippet } from "svelte"

	interface Props {
		children: Snippet
		theme: Theme
	}

	let { children, theme }: Props = $props()

	let store = initThemeStore(theme)
</script>

<div>Theme provider</div>
<div>
	{@render children()}
</div>
