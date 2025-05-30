<script lang="ts">
	import "../app.css"
	import config from "$lib/config"
	import Head from "$lib/components/head/head.svelte"
	import Header from "./header.svelte"
	import Footer from "./footer.svelte"

	let { children } = $props()
</script>

<Head title={config.title} description={config.description} favicon="/favicon.ico" />

<div class="min-h-screen">
	<Header />
	<main class="mx-auto w-full max-w-7xl px-4">
		{@render children()}
	</main>
</div>
<Footer />
