<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Input from "./input.svelte"

	const { Story } = defineMeta({
		title: "Components/Input",
		component: Input,
		tags: ["autodocs"],
		argTypes: {
			type: {
				control: { type: "select" },
				options: ["text", "email", "password", "number", "tel", "url", "search", "date"]
			},
			disabled: { control: "boolean" },
			required: { control: "boolean" },
			readonly: { control: "boolean" },
			name: { control: "text" },
			placeholder: { control: "text" },
			helpText: { control: "text" },
			initialValue: { control: "text" }
		},
		args: {
			type: "text",
			name: "example",
			placeholder: "Enter text here..."
		}
	})
</script>

<Story name="Default" args={{ name: "username", placeholder: "Enter your username" }} />

<Story name="Email" args={{ 
	type: "email", 
	name: "email", 
	placeholder: "Enter your email address",
	helpText: "We'll never share your email with anyone else."
}} />

<Story name="Password" args={{ 
	type: "password", 
	name: "password", 
	placeholder: "Enter your password",
	required: true
}} />

<Story name="Number" args={{ 
	type: "number", 
	name: "age", 
	placeholder: "Enter your age",
	min: 0,
	max: 120,
	helpText: "Enter a number between 0 and 120"
}} />

<Story name="Disabled" args={{ 
	name: "disabled", 
	placeholder: "This field is disabled",
	disabled: true,
	initialValue: "Cannot edit this"
}} />

<Story name="Required" args={{ 
	name: "required", 
	placeholder: "This field is required",
	required: true,
	helpText: "This field must be filled out."
}} />

<Story name="With Help Text" args={{ 
	name: "website", 
	placeholder: "https://example.com",
	helpText: "Enter a valid URL including http:// or https://"
}} />

<Story name="Readonly" args={{ 
	name: "readonly", 
	initialValue: "This is read-only",
	readonly: true,
	helpText: "This field cannot be modified."
}} />