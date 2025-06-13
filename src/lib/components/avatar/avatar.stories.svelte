<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Avatar from "./__story.svelte"

	const { Story } = defineMeta({
		title: "Components/Avatar",
		tags: ["autodocs"],
		component: Avatar,
		parameters: {
			docs: {
				description: {
					component:
						"Avatar components for displaying user profile pictures with fallback initials. Supports multiple sizes and graceful fallback when images fail to load."
				}
			}
		}
	})
</script>

<Story name="Avatar" />
