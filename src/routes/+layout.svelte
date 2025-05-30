<script lang="ts">
	import "@fontsource/libre-caslon-text"
	import "../app.css"
	import config from "$lib/config"
	import Head from "$lib/components/head/head.svelte"
	import ThemeProvider from "$lib/theme/theme-provider.svelte"
	import Header from "./header.svelte"
	import Footer from "./footer.svelte"

	let { children } = $props()
</script>

<Head
	title={config.title}
	description={config.description}
	url={config.url}
	favicon="/favicon.ico"
/>

<ThemeProvider>
	<div class="bg-white text-neutral-900 transition-all dark:bg-neutral-950 dark:text-neutral-200">
		<div class="min-h-screen">
			<Header />
			<main class="mx-auto w-full max-w-7xl px-4">
				{@render children()}
			</main>
		</div>
		<Footer />
	</div>
</ThemeProvider>
