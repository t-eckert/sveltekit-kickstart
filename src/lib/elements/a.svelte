<script lang="ts">
	import { type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		href?: string;
		target?: string;
		rel?: string;
	};

	const { href = '#', target, rel, children }: Props = $props();
</script>

<a {href} {target} {rel} class="">
	{@render children()}
</a>

