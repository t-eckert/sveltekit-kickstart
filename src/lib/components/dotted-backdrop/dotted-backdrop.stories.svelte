<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import DottedBackdrop from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Components/Dotted Backdrop",
		tags: ["autodocs"],
		component: DottedBackdrop,
		parameters: {
			docs: {
				description: {
					component: ""
				}
			}
		}
	})
</script>

<Story name="Dotted Backdrop" />
