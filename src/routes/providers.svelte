<script lang="ts">
	import ThemeProvider from "$lib/theme/theme-provider.svelte"

	let { children } = $props()
</script>

<ThemeProvider theme="light">
	{@render children()}
</ThemeProvider>
