<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import ShowcaseTypography from "./showcase.typography.svelte"

	const { Story } = defineMeta({
		title: "Design System/Typography",
		tags: ["autodocs"],
		component: ShowcaseTypography,
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

<Story name="Typography" />
