<script lang="ts">
	import { type Snippet } from "svelte"

	interface Props {
		children: Snippet
		padding?: "sm" | "md" | "lg"
		shadow?: "none" | "sm" | "md" | "lg"
	}

	let { 
		children,
		padding = "md",
		shadow = "sm"
	}: Props = $props()

	const paddingClasses = {
		sm: "p-2",
		md: "p-3",
		lg: "p-6"
	}

	const shadowClasses = {
		none: "",
		sm: "shadow-sm",
		md: "shadow",
		lg: "shadow-lg"
	}
</script>

<section class="rounded-md border border-neutral-100 {paddingClasses[padding]} {shadowClasses[shadow]}">
	{@render children()}
</section>
