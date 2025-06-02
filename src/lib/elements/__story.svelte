<script lang="ts">
	import { A, H1, H2, H3, H4, H5, H6, Img, Li, Ol, P, Pre, Span, Strong, Ul } from "./index"
</script>

<div class="mx-auto max-w-4xl space-y-8 p-6">
	<div class="space-y-4">
		<H1>{#snippet children()}Heading Level 1{/snippet}</H1>
		<H2>{#snippet children()}Heading Level 2{/snippet}</H2>
		<H3>{#snippet children()}Heading Level 3{/snippet}</H3>
		<H4>{#snippet children()}Heading Level 4{/snippet}</H4>
		<H5>{#snippet children()}Heading Level 5{/snippet}</H5>
		<H6>{#snippet children()}Heading Level 6{/snippet}</H6>
	</div>

	<div class="space-y-4">
		<P
			>{#snippet children()}This is a paragraph element with some sample text to demonstrate how
				paragraphs look in your design system. Paragraphs are fundamental building blocks for
				content.{/snippet}</P
		>

		<P
			>{#snippet children()}Here's another paragraph that includes some <Strong
					>{#snippet children()}strong text{/snippet}</Strong
				> and a <Span>{#snippet children()}span element{/snippet}</Span> to show inline styling.{/snippet}</P
		>

		<P
			>{#snippet children()}This paragraph contains a <A href="https://example.com"
					>{#snippet children()}link element{/snippet}</A
				> that demonstrates the anchor styling.{/snippet}</P
		>
	</div>

	<div class="space-y-4">
		<H3>{#snippet children()}Lists{/snippet}</H3>

		<Ul>
			{#snippet children()}
				<Li>{#snippet children()}First unordered list item{/snippet}</Li>
				<Li>{#snippet children()}Second unordered list item{/snippet}</Li>
				<Li
					>{#snippet children()}Third unordered list item with <Strong
							>{#snippet children()}nested strong text{/snippet}</Strong
						>{/snippet}</Li
				>
			{/snippet}
		</Ul>

		<Ol>
			{#snippet children()}
				<Li>{#snippet children()}First ordered list item{/snippet}</Li>
				<Li>{#snippet children()}Second ordered list item{/snippet}</Li>
				<Li>{#snippet children()}Third ordered list item{/snippet}</Li>
			{/snippet}
		</Ol>
	</div>

	<div class="space-y-4">
		<H3>{#snippet children()}Code and Preformatted Text{/snippet}</H3>
	</div>

	<div class="space-y-4">
		<H3>{#snippet children()}Images{/snippet}</H3>

		<Img
			src="https://plus.unsplash.com/premium_photo-1734549547834-f38f7f6b295f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Sample placeholder image"
			width={400}
			height={200}
			loading="lazy"
		/>
	</div>

	<div class="space-y-4">
		<H3>{#snippet children()}Form Elements{/snippet}</H3>
	</div>

	<div class="space-y-4">
		<H3>{#snippet children()}Typography Showcase{/snippet}</H3>

		<P
			>{#snippet children()}This section demonstrates how all the elements work together. You can
				combine <Strong>{#snippet children()}strong emphasis{/snippet}</Strong>, <Span
					>{#snippet children()}spans for inline styling{/snippet}</Span
				>, and <A href="#">{#snippet children()}links{/snippet}</A> within paragraphs.{/snippet}</P
		>

		<Ul>
			{#snippet children()}
				<Li
					>{#snippet children()}Lists can contain <A href="#"
							>{#snippet children()}links{/snippet}</A
						>{/snippet}</Li
				>
				<Li
					>{#snippet children()}And <Strong>{#snippet children()}strong text{/snippet}</Strong> for emphasis{/snippet}</Li
				>
				<Li
					>{#snippet children()}Plus regular <Span
							>{#snippet children()}span elements{/snippet}</Span
						>{/snippet}</Li
				>
			{/snippet}
		</Ul>
	</div>
</div>
