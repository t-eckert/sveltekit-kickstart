<script lang="ts">
	import Panel from "$lib/components/panel/panel.svelte"
	import PanelActions from "$lib/components/panel/panel-actions.svelte"
	import PanelBar from "$lib/components/panel/panel-bar.svelte"
	import PanelBody from "$lib/components/panel/panel-body.svelte"
	import Button from "$lib/components/button/button.svelte"

	interface Props {
		status: number
		error: Error | null
	}

	const { status, error }: Props = $props()
</script>

<Panel>
	{#snippet bar()}<PanelBar title="Error" tone="negative" />{/snippet}
	{#snippet body()}
		<PanelBody>
			<div class="flex min-w-80 flex-col items-start select-none">
				<div class="font-mono text-6xl">{status}</div>
				<div>
					{error?.message}
				</div>
			</div>
		</PanelBody>
	{/snippet}
	{#snippet actions()}
		<PanelActions>
			<Button href="/"><span class="text-xs font-medium">Return home</span></Button>
			<Button role="tertiary" href="/feedback">
				<span class="text-xs font-medium"> Give feedback </span>
			</Button>
		</PanelActions>
	{/snippet}
</Panel>
