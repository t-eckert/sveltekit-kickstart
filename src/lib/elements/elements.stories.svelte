<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import ElementsStory from "./elements-story.svelte"

	const { Story } = defineMeta({
		title: "Elements",
		tags: ["autodocs"],
		component: ElementsStory,
		parameters: {
			docs: {
				description: {
					component:
						"A showcase of all styled HTML elements in the design system. These elements provide consistent typography and styling throughout the application."
				}
			}
		}
	})
</script>

<Story name="All elements" />
