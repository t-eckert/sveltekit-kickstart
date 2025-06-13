<script lang="ts">
	import { type Snippet } from "svelte"

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<section class="rounded-md border border-neutral-200 bg-white/80 p-2 shadow backdrop-blur-2xl">
	{@render children()}
</section>
