<script lang="ts">
	import {type Snippet} from "svelte"
	import {cva} from "cva"

	type Alignment = "left" | "center" | "right" | "justify" | "start" | "end"

	interface Props {
		children?: Snippet
		alignment?: Alignment
	}

	let {children, alignment = "left"}: Props = $props()


	const thStyle = cva("px-0.5 py-0.5 text-sm font-medium text-neutral-800", {
		variants: {
			alignment: {
				left: "text-left",
				center: "text-center",
				right: "text-right",
				justify: "text-justify",
				start: "text-start",
				end: "text-end"
			}
		},
		defaultVariants: {
			alignment: "left"
		}
	})
</script>

<th class={thStyle({alignment})}>
	{#if children}
		{@render children()}
	{/if}
</th>
