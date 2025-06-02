<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Accordion from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Components/Accordion",
		tags: ["autodocs"],
		component: Accordion,
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

<Story name="Accordion" />
