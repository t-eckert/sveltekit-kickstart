<script lang="ts">
	import { Label, Switch } from "bits-ui"

	interface Props {
		id?: string
		name?: string
		label?: string
		checked?: boolean
		disabled?: boolean
		onCheckedChange?: (checked: boolean) => void
	}

	let {
		id = "switch",
		name = "switch",
		label = "Toggle",
		checked = false,
		disabled = false,
		onCheckedChange = () => {}
	}: Props = $props()
</script>

<div class="flex items-center space-x-3">
	<Switch.Root
		{id}
		{name}
		{checked}
		{disabled}
		{onCheckedChange}
		class="focus-visible:ring-foreground focus-visible:ring-offset-background data-[state=checked]:bg-foreground data-[state=unchecked]:bg-dark-10 data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-foreground peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
	>
		<Switch.Thumb
			class="bg-background data-[state=unchecked]:shadow-mini dark:border-background/30 dark:bg-foreground dark:shadow-popover pointer-events-none block size-[30px] shrink-0 rounded-full transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 dark:border dark:data-[state=unchecked]:border"
		/>
	</Switch.Root>
	<Label.Root for={id} class="text-sm font-medium">{label}</Label.Root>
</div>
