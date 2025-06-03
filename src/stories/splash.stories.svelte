<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Splash from "./splash.svelte"

	const { Story } = defineMeta({
		title: "Layouts/Splash",
		tags: ["autodocs"],
		component: Splash,
		argTypes: {
			message: { control: "text" }
		},
		parameters: {
			docs: {
				description: {
					component: ""
				}
			}
		}
	})
</script>

<Story name="Splash" />
