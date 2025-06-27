<script lang="ts">
	import { type Snippet } from "svelte"
	import { cva } from "cva"

	type Props = {
		children: Snippet
	}

	const { children }: Props = $props()

	const style = cva([
		"text-9xl",
		"font-bold",
		"tracking-tight",
		"text-neutral-800",
		"dark:text-neutral-100"
	])
</script>

<span class={style()}>
	{@render children()}
</span>
