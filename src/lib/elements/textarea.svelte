<script lang="ts">
	import { type Snippet } from "svelte"

	type Props = {
		children: Snippet
		name?: string
		id?: string
		value?: string
		placeholder?: string
		rows?: number
		cols?: number
		disabled?: boolean
		required?: boolean
		readonly?: boolean
		autofocus?: boolean
		maxlength?: number
		minlength?: number
	}

	const {
		name,
		id,
		value,
		placeholder,
		rows,
		cols,
		disabled = false,
		required = false,
		readonly = false,
		autofocus = false,
		maxlength,
		minlength,
		children
	}: Props = $props()
</script>

<textarea
	{name}
	{id}
	{placeholder}
	{rows}
	{cols}
	{disabled}
	{required}
	{readonly}
	{autofocus}
	{maxlength}
	{minlength}
	class="">{value || ""}</textarea
>

