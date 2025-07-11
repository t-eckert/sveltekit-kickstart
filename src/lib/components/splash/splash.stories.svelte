<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Splash from "./splash.svelte"

	const { Story } = defineMeta({
		title: "Components/Splash",
		component: Splash,
		tags: ["autodocs"]
	})
</script>

<Story name="Default">
	<Splash />
</Story>
