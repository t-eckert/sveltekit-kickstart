<script lang="ts">
	interface Props {
		title: string
		description: string
		favicon: string
	}

	let { title, description, favicon }: Props = $props()
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="icon" href={favicon} />
</svelte:head>
