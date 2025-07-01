<script lang="ts">
	import type { Snippet } from "svelte"
	import buttonStyle from "./button-style"

	type Role = "primary" | "secondary" | "tertiary"
	type Tone = "neutral" | "positive" | "negative"
	type Shape = "rectangle" | "circle" | "square" | "rounded"

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
		formaction?: string
		type?: "button" | "submit" | "reset"
		ariaLabel?: string
		ariaDescribedBy?: string
		ariaExpanded?: boolean
		ariaPressed?: boolean
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
		children,
		formaction = "",
		type,
		ariaLabel,
		ariaDescribedBy,
		ariaExpanded,
		ariaPressed
	}: Props = $props()
</script>

{#if href}
	<a
		class={buttonStyle({ role, tone, shape })}
		{href}
		aria-label={ariaLabel}
		aria-describedby={ariaDescribedBy}
		aria-expanded={ariaExpanded}
		aria-pressed={ariaPressed}
		role="button"
		tabindex="0"
	>
		{@render children()}
	</a>
{:else}
	<button
		class={buttonStyle({ role, tone, shape })}
		{type}
		{onclick}
		{disabled}
		{name}
		{value}
		{formaction}
		aria-label={ariaLabel}
		aria-describedby={ariaDescribedBy}
		aria-expanded={ariaExpanded}
		aria-pressed={ariaPressed}
	>
		{@render children()}
	</button>
{/if}
