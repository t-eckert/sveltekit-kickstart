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
	<div class="flex w-full flex-col items-start gap-4 p-4">
		<div class="flex w-full flex-col items-start gap-4 border-t border-t-neutral-600 py-1">
			<div class="flex flex-row items-center justify-between">
				<div>Title</div>
				<div>
					<span> </span>
				</div>
			</div>
			<Title>The Great Gatsby</Title>
		</div>

		<div class="flex w-full flex-col items-start gap-4 border-t border-t-neutral-600 py-1">
			<div class="flex flex-row items-center justify-between">
				<div>Subtitle</div>
				<div>
					<span> </span>
				</div>
			</div>
			<Subtitle>
				The Berlin key, also known as Schließzwangschlüssel, was not designed to make people laugh.
			</Subtitle>
		</div>

		<div class="flex w-full flex-col items-start gap-4 border-t border-t-neutral-600 py-1">
			<div class="flex flex-row items-center justify-between">
				<div>Subtitle</div>
				<div>
					<span> </span>
				</div>
			</div>
			<Subtitle>Illusion</Subtitle>
		</div>

		<div class="flex w-full flex-col items-start gap-4 border-t border-t-neutral-600 py-1">
			<div class="flex flex-row items-center justify-between">
				<div>Body</div>
				<div>
					<span> </span>
				</div>
			</div>
			<div>
				<P>
					One of the most famous lighthouses of antiquity, as I have already pointed out, was the
					pharos of Alexandria, which ancient writers included among the Seven Wonders of the World.
					It might naturally be supposed that the founder of so remarkable a monument of
					architectural skill would be well known; yet while Strabo and Pliny, Eusebius, Suidas, and
					Lucian ascribe its erection to Ptolemæus Philadelphus, the wisest and most benevolent of
					the Ptolemean kings of Egypt, by Tzetzes and Ammianus Marcellinus the honour is given to
					Cleopatra; and other authorities even attribute it to Alexander the Great.
				</P>
			</div>
		</div>
	</div>

	<div class="mx-auto flex flex-col gap-2 p-4">
		<Title>The Inter<br /> typeface family</Title>
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
