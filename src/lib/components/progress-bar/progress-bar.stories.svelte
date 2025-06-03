<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import ProgressBar from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Components/Progress Bar",
		tags: ["autodocs"],
		component: ProgressBar,
		parameters: {
			docs: {
				description: {
					component:
						"Progress bar components for showing completion status of tasks, uploads, downloads, or any process with measurable progress."
				}
			}
		}
	})
</script>

<Story name="Progress Bar" />