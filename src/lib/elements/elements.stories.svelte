<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Elements from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Elements",
		tags: ["autodocs"],
		component: Elements,
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

<Story name="Elements" />
