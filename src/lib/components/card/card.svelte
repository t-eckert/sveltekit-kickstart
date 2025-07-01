<script lang="ts">
	import { type Snippet } from "svelte"
	import { cva } from "cva"
	import { cn } from "$lib/utils"

	interface Props {
		children: Snippet
		class?: string
	}

	let { children, class: className }: Props = $props()

	let style = cva([
		"rounded-lg border border-neutral-200 bg-white/80 p-2 shadow-md backdrop-blur-2xl",
		"dark:bg-neutral-950/80 dark:border-neutral-700 dark:shadow-none"
	])
</script>

<section class={cn(style(), className)}>
	{@render children()}
</section>
