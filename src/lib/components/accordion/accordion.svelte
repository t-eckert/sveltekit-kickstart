<script lang="ts">
	import { Accordion } from "bits-ui"
	import CaretDown from "phosphor-svelte/lib/CaretDown"

	interface Item {
		value: string
		title: string
		content: string
	}

	interface Props {
		items: Item[]
	}

	let { items }: Props = $props()
</script>

<Accordion.Root class="w-full" type="multiple">
	{#each items as item (item.value)}
		<Accordion.Item value={item.value} class="group border-b border-neutral-300 px-2">
			<Accordion.Header>
				<Accordion.Trigger
					class="flex w-full flex-1 items-center justify-start gap-3 py-3 text-[15px] font-medium transition-all select-none [&[data-state=open]>span>svg]:rotate-180"
				>
					<span
						class="hover:bg-dark-10 inline-flex size-6 items-center justify-center rounded-[7px] bg-transparent text-neutral-400"
					>
						<CaretDown class="size-[18px] transition-transform duration-200" />
					</span>
					<span class="w-full text-left leading-tight">
						{item.title}
					</span>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content
				class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em]"
			>
				<div class="pb-[25px]">
					{item.content}
				</div>
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
