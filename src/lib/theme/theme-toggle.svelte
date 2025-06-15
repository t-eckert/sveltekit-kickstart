<script lang="ts">
	import { Sun, Moon } from "phosphor-svelte"
	import { getThemeStore } from "./theme-store.svelte"
	import Button from "$lib/components/button/button.svelte"
	import type { SubmitFunction } from "@sveltejs/kit"

	let store = getThemeStore()

	const submitUpdateTheme: SubmitFunction = async ({ action }) => {
		const theme = action.searchParams.get("theme")

		if (theme) {
			document.documentElement.setAttribute("data-theme", theme)
		}
	}
</script>

<form method="POST" use:enhance={submitUpdateTheme}>
	{#if store.theme === "dark"}
		<Button shape="square" role="tertiary" formAction="/?/setTheme&theme=light">
			<Sun />
		</Button>
	{:else if store.theme === "light"}
		<Button shape="square" role="tertiary" formAction="/?/setTheme&theme=dark">
			<Moon />
		</Button>
	{:else if store.theme === "system"}
		<Button shape="square" role="tertiary" formAction="/?/setTheme&theme=light">
			<Sun />
		</Button>
	{/if}
</form>
