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
					component: ""
				}
			}
		}
	})
</script>

<Story name="Accordion" />
