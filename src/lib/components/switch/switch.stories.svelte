<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Switch from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Components/Switch",
		tags: ["autodocs"],
		component: Switch,
		parameters: {
			docs: {
				description: {
					component:
						"Switch components for toggling settings or binary options. Provides clear visual feedback for on/off states with disabled state support."
				}
			}
		}
	})
</script>

<Story name="Switch" />
