<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Filedrop from "./filedrop.svelte"

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Components/Filedrop",
		component: Filedrop,
		tags: ["autodocs"],
		argTypes: {}
	})
</script>
