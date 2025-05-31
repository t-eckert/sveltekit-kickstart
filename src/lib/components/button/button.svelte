<script lang="ts">
	import type { Snippet } from "svelte"
	import buttonStyle from "./button-style"

	type Role = "primary" | "secondary" | "tertiary"
	type Tone = "neutral" | "positive" | "negative"
	type Shape = "rectangle" | "circle"

	interface Props {
		children: Snippet
		role?: Role
		tone?: Tone
		shape?: Shape
		href?: string
		onclick?: () => void
		disabled?: boolean
		name?: string
		value?: string | number | string[] | null | undefined
	}

	const {
		role = "primary",
		tone = "neutral",
		shape = "rectangle",
		href,
		onclick = () => {},
		disabled = false,
		name,
		value,
		children
	}: Props = $props()
</script>

{#if href}
	<a class={buttonStyle({ role, tone, shape })} {href}>
		{@render children()}
	</a>
{:else}
	<button class={buttonStyle({ role, tone, shape })} {onclick} {disabled} {name} {value}>
		{@render children()}
	</button>
{/if}
