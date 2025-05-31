<script lang="ts">
	import { alwaysValid, type Validator } from "./validators"

	type Props = {
		type?: string
		name?: string
		id?: string
		initialValue?: string | number
		placeholder?: string
		disabled?: boolean
		required?: boolean
		min?: number | string
		max?: number | string
		step?: number | string
		pattern?: string
		readonly?: boolean
		validator?: Validator
		helpText?: string
	}

	const {
		type = "text",
		name,
		id,
		initialValue,
		placeholder,
		disabled = false,
		required = false,
		min,
		max,
		step,
		pattern,
		readonly = false,
		validator = alwaysValid,
		helpText
	}: Props = $props()

	let value = $state(initialValue || "")
	let validity = $derived(validator(value))
</script>

<div class="w-full">
	<div class="flex flex-row items-baseline justify-between">
		<label for={id} class="text-sm/6 font-medium text-neutral-900"
			>{name || id ? `${name || id}` : ""}</label
		>
		{#if !required}
			<span class="text-sm/6 text-neutral-500">Optional</span>
		{/if}
	</div>
	<input
		{type}
		{name}
		{id}
		bind:value
		{placeholder}
		{disabled}
		{required}
		{min}
		{max}
		{step}
		{pattern}
		{readonly}
		class="w-full rounded-md border border-neutral-400 px-2.5 py-1 text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6"
	/>
	{#if helpText}
		<p class="mt-2 text-sm text-neutral-500" id={`${id}-help-text`}>{helpText}</p>
	{/if}
	{#if !validity[0]}
		<p class="mt-2 text-sm text-red-500" id={`${id}-error`}>
			{validity[1] || "Input is not valid"}
		</p>
	{/if}
</div>
