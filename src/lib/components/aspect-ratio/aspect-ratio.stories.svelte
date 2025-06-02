<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import AspectRatio from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Components/Aspect Ratio",
		tags: ["autodocs"],
		component: AspectRatio,
		parameters: {
			docs: {
				description: {
					component:
						"A component for maintaining consistent aspect ratios across different content. Useful for responsive images, videos, and other media that need to maintain their proportions."
				}
			}
		}
	})
</script>

<Story name="Aspect Ratio" />