<script lang="ts">
	import {cva} from "cva"

	type Alignment = "left" | "center" | "right" | "justify" | "start" | "end"

	interface Props {
		children?: Snippet
		alignment?: Alignment
	}

	let {children, alignment = "left"}: Props = $props()


	const tdStyle = cva("px-0.5 py-0.5 text-sm", {
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

<td class={tdStyle({alignment})}>
	{#if children}
		{@render children()}
	{/if}
</td>
