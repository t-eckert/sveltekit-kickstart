<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Accordion from "./accordion.svelte"

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

<Story
	name="Accordion"
	args={{
		items: [
			{
				value: "1",
				title: "What is the meaning of life?",
				content:
					"To become a better person, to help others, and to leave the world a better place than you found it."
			},
			{
				value: "2",
				title: "How do I become a better person?",
				content:
					"Read books, listen to podcasts, and surround yourself with people who inspire you."
			},
			{
				value: "3",
				title: "What is the best way to help others?",
				content: "Give them your time, attention, and love."
			}
		]
	}}
/>
