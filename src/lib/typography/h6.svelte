<script lang="ts">
	import { type Snippet } from "svelte"
	import { cva } from "cva"

	type Props = {
		children: Snippet
		fontStyle?: "sans" | "serif" | "mono"
	}

	const { children, fontStyle = "sans" }: Props = $props()

	const style = cva(["text-sm text-neutral-900 dark:text-neutral-100"], {
		variants: {
			fontStyle: {
				sans: ["font-sans", "font-bold", "tracking-tight"],
				serif: ["font-serif", "font-bold", "tracking-tight"],
				mono: ["font-mono", "font-bold", "tracking-tighter"]
			}
		},
		defaultVariants: {
			fontStyle: "sans"
		}
	})
</script>

<h6 class={style({ fontStyle })}>
	{@render children()}
</h6>
