<script lang="ts">
	import { cva } from "cva"
	import slug from "$lib/utils/slug"

	type Props = {
		text: string
		fontStyle?: "sans" | "serif" | "mono"
		id?: string
	}

	const { text, fontStyle = "sans", id }: Props = $props()

	const style = cva(["text-3xl text-neutral-900 dark:text-neutral-100"], {
		variants: {
			fontStyle: {
				sans: ["font-sans", "font-bold", "tracking-normal"],
				serif: ["font-serif", "font-bold", "tracking-tight"],
				mono: ["font-mono", "font-bold", "tracking-tighter"]
			}
		},
		defaultVariants: {
			fontStyle: "sans"
		}
	})

	const headingId = id || slug(text)
</script>

<h1 class={style({ fontStyle })} id={headingId}>
	{text}
</h1>
