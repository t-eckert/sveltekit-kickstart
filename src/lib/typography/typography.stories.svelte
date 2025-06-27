<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import { Title, Subtitle, H1, H2, H3, H4, H5, H6, Li, Ol, P, Span, Strong, Ul } from "./index"

	const { Story } = defineMeta({
		title: "Design System/Typography",
		tags: ["autodocs"],
		parameters: {
			docs: {
				description: {
					component:
						"A showcase of all styled HTML elements in the design system. These elements provide consistent typography and styling throughout the application."
				}
			}
		}
	})
</script>

<Story name="Typography">
	<div class="mx-auto flex max-w-3xl flex-col gap-2 p-4">
		<Title>Title</Title>
		<Subtitle>Subtitle</Subtitle>

		<H1>Heading Level 1</H1>
		<H2>Heading Level 2</H2>
		<H3>Heading Level 3</H3>
		<H4>Heading Level 4</H4>
		<H5>Heading Level 5</H5>
		<H6>Heading Level 6</H6>

		<P>This is a paragraph element styled with the design system.</P>
		<Span>This is a span element.</Span>
		<Strong>This text is strong.</Strong>

		<Ol>
			<Li>Ordered List Item 1</Li>
			<Li>Ordered List Item 2</Li>
			<Li>Ordered List Item 3</Li>
		</Ol>

		<Ul>
			<Li>Unordered List Item A</Li>
			<Li>Unordered List Item B</Li>
			<Li>Unordered List Item C</Li>
		</Ul>
	</div>
</Story>
