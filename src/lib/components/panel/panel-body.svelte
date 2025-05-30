<script lang="ts">
	import type { Snippet } from "svelte"

	let { children }: { children: Snippet } = $props()
</script>

<div class="w-full px-3 py-6">{@render children()}</div>
