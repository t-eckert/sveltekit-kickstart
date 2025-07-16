<script lang="ts">
	import Head from "./head.svelte"

	let {
		title,
		description,
		url,
		favicon,
		ogImage
	}: {
		title: string
		description: string
		url: string
		favicon: string
		ogImage?: string
	} = $props()
</script>

<Head
	{title}
	{description}
	{url}
	{favicon}
	{ogImage}
/>

<!-- Add a div for testing purposes since svelte:head is not directly testable -->
<div data-testid="head-wrapper" style="display: none;">
	<span data-testid="title">{title}</span>
	<span data-testid="description">{description}</span>
	<span data-testid="url">{url}</span>
	<span data-testid="favicon">{favicon}</span>
	{#if ogImage}
		<span data-testid="og-image">{ogImage}</span>
	{/if}
</div>