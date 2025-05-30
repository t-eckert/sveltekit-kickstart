<script lang="ts">
	import { cva } from "cva"

	type Tone = "neutral" | "positive" | "negative"

	interface Props {
		title: string
		tone?: Tone
	}

	let { title, tone = "neutral" }: Props = $props()

	const bar = cva("w-full px-3 py-0.5 rounded-t-sm border-b", {
		variants: {
			tone: {
				neutral: "bg-neutral-50 text-stone-800 dark:text-zinc-200 border-b-stone-100",
				positive: "bg-emerald-200 border-b-emerald-300",
				negative: "bg-red-50 text-red-600 dark:bg-red-600 dark:text-red-200 border-b-red-100"
			}
		}
	})
</script>

<div class={bar({ tone })}>
	<span class="text-sm font-semibold">{title}</span>
</div>
