<script lang="ts">
	import { cva } from "cva"

	type Color =
		| "neutral"
		| "red"
		| "orange"
		| "yellow"
		| "green"
		| "blue"
		| "indigo"
		| "purple"
		| "pink"

	interface Props {
		text: string
		color?: Color
	}

	let { color, text }: Props = $props()

	let badgeStyle = cva(
		"text-xs font-medium px-2 py-0.5 rounded-full flex justify-center items-center border",
		{
			variants: {
				color: {
					neutral:
						"bg-neutral-100 text-neutral-800 border-neutral-300 dark:bg-neutral-700 dark:text-neutral-200",
					red: "bg-rose-100 text-rose-800 border-rose-300 dark:bg-red-700 dark:text-red-200",
					orange:
						"bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-700 dark:text-orange-200",
					yellow:
						"bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-700 dark:text-yellow-200",
					green:
						"bg-green-100 text-green-800 border-green-300 dark:bg-green-700 dark:text-green-200",
					blue: "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200",
					indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200",
					purple: "bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-200",
					pink: "bg-pink-100 text-pink-800 dark:bg-pink-700 dark:text-pink-200"
				}
			},
			defaultVariants: {
				color: "neutral"
			}
		}
	)
</script>

<span class={badgeStyle({ color })}>
	{text}
</span>
