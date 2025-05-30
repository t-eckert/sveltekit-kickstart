<script lang="ts">
	import { Sun, Moon } from "phosphor-svelte"
	import { getThemeStore } from "./theme-store.svelte"

	let store = getThemeStore()
</script>

<button
	class="flex aspect-square h-6.5 cursor-pointer items-center justify-center rounded border border-transparent bg-none p-0.5 transition-all hover:border-gray-100 hover:bg-gray-50 hover:shadow hover:dark:border-gray-700 hover:dark:bg-gray-800"
	onclick={() => store.toggle()}
>
	{#if store.theme === "dark"}
		<Moon />
	{:else}
		<Sun />
	{/if}
</button>
