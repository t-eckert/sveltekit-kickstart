<script lang="ts">
	import { type Snippet } from "svelte"

	let { children }: { children?: Snippet } = $props()
</script>

<colgroup>{@render children()}</colgroup>
