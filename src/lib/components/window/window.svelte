<script lang="ts">
	import { type Snippet } from "svelte";

	interface Props {
		children: Snippet;
		background?: string
	}

	let {children, background}: Props = $props();
</script>

<section class={`rounded-md border border-neutral-100 p-2 shadow resize overflow-auto ${background ?? 'bg-white/80 backdrop-blur-2xl'}`}>
	<div class="border w-full h-full border-neutral-200 overflow-auto rounded bg-white/80 backdrop-blur-2xl">
		{@render children()}
	</div>
</section>
