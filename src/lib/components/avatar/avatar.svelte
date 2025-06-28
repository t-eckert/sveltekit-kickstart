<script lang="ts">
	import { Avatar } from "bits-ui"
	import { cva } from "cva"
	import { fade } from "svelte/transition"
	import initials from "$lib/utils/initials"

	interface Props {
		displayName: string
		src?: string
		size?: "sm" | "md" | "lg" | "display"
		delayMs?: number
	}

	let { src, displayName, size = "md", delayMs = 0 }: Props = $props()

	let alt = `Avatar for ${displayName}`

	const rootStyle = cva(
		"flex items-center justify-center transition-all overflow-hidden rounded-full",
		{
			variants: {
				size: {
					sm: "h-8 w-8 text-sm",
					md: "h-12 w-12 text-[17px]",
					lg: "h-16 w-16 text-xl",
					display: "h-96 w-96 text-3xl"
				}
			},
			defaultVariants: {
				size: "md"
			}
		}
	)

	const fallbackStyle = cva([
		"flex h-full w-full items-center justify-center rounded-full font-medium text-neutral-800 dark:text-neutral-200",
		"bg-gradient-to-t from-neutral-200 to-neutral-100 shadow-inner shadow-neutral-200",
		"dark:from-neutral-800 dark:to-neutral-700 dark:shadow-inner dark:shadow-neutral-800"
	])
</script>

<Avatar.Root class={rootStyle({ size })} {delayMs}>
	<Avatar.Image {src} {alt} class="h-full w-full object-cover" />
	<Avatar.Fallback class={fallbackStyle()}>
		{size == "display" ? displayName : initials(displayName)}
	</Avatar.Fallback>
</Avatar.Root>
