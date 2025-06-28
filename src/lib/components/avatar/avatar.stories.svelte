<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Avatar from "./avatar.svelte"

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

<Story
	name="With Image"
	args={{
		displayName: "John Doe",
		src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
		size: "md"
	}}
/>

<Story
	name="Fallback Initials"
	args={{
		displayName: "John Doe",
		size: "md"
	}}
/>

<Story
	name="With Long Loading Image"
	args={{
		displayName: "John Doe",
		src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
		size: "md",
		delayMs: 2000
	}}
/>
