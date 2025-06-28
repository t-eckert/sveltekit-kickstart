<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Badge from "./badge.svelte"

	const { Story } = defineMeta({
		title: "Components/Badge",
		tags: ["autodocs"],
		component: Badge,
		parameters: {
			docs: {
				description: {
					component:
						"Badge components for displaying status, categories, or labels. Available in multiple colors with automatic dark mode support."
				}
			}
		}
	})
</script>

<Story name="Badge" args={{text: "Badge Text"}} />

<Story name="Long Text Badge" args={{text: "This is a very long badge text that will be truncated and show a tooltip on hover"}} />
