<script lang="ts">
	import { type Snippet } from "svelte"


	interface Props {
		children: Snippet
	}

	let { 
		children,
	}: Props = $props()
</script>

<section class="rounded-md border border-neutral-200 p-2 shadow bg-white/80 backdrop-blur-2xl">
	{@render children()}
</section>
