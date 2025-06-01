<script lang="ts">
	import { TimeRangeField } from "bits-ui"
</script>

<TimeRangeField.Root class="group flex w-full max-w-[320px] flex-col gap-1.5">
	<TimeRangeField.Label class="block text-sm font-medium select-none">
		Hotel dates
	</TimeRangeField.Label>
	<div
		class="h-input rounded-input border-border-input bg-background text-foreground focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover group-data-invalid:border-destructive flex w-full items-center border px-2 py-3 text-sm tracking-[0.01em] select-none"
	>
		{#each ["start", "end"] as const as type (type)}
			<TimeRangeField.Input {type}>
				{#snippet children({ segments })}
					{#each segments as { part, value }, i (part + i)}
						<div class="inline-block select-none">
							{#if part === "literal"}
								<TimeRangeField.Segment {part} class="text-muted-foreground p-1">
									{value}
								</TimeRangeField.Segment>
							{:else}
								<TimeRangeField.Segment
									{part}
									class="rounded-5px hover:bg-muted focus:bg-muted focus:text-foreground aria-[valuetext=Empty]:text-muted-foreground px-1 py-1 focus-visible:ring-0! focus-visible:ring-offset-0!"
								>
									{value}
								</TimeRangeField.Segment>
							{/if}
						</div>
					{/each}
				{/snippet}
			</TimeRangeField.Input>
			{#if type === "start"}
				<div aria-hidden="true" class="text-muted-foreground pr-2 pl-1">to</div>
			{/if}
		{/each}
	</div>
</TimeRangeField.Root>
