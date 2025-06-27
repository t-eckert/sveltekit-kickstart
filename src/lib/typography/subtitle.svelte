<script lang="ts">
	import { type Snippet } from "svelte"

	type Props = {
		children: Snippet
	}

	const { children }: Props = $props()
</script>

<span class="text-7xl font-semibold tracking-tight text-neutral-800 dark:text-white">
	{@render children()}
</span>
