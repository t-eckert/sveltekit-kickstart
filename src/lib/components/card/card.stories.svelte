<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Card from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Components/Card",
		tags: ["autodocs"],
		component: Card,
		parameters: {
			docs: {
				description: {
					component:
						"Card components provide a flexible container for grouping related content. Supports different padding and shadow levels for various design needs."
				}
			}
		}
	})
</script>

<Story name="Card" />
