<script lang="ts">
	import { type Snippet } from "svelte"

	let { children }: { children?: Snippet } = $props()
</script>

<tr class="border-b border-b-neutral-100">
	{#if children}
		{@render children()}
	{/if}
</tr>
