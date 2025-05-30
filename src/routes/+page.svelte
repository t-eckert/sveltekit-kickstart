<script lang="ts">
	import Article from "$lib/components/article/article.svelte"

	import { H1, H2, H3, P } from "$lib/elements"

	import Filedrop from "$lib/components/filedrop/filedrop.svelte"
	import ThemeToggle from "$lib/theme/theme-toggle.svelte"

	import Modal from "$lib/components/modal/modal.svelte"
</script>

<div class="flex justify-center mt-12">
	<Article>
		<H1>Welcome to Thomas' Site Starter</H1>
		<P>
			This is my personal site starter template built with SvelteKit, Tailwind CSS, and TypeScript.
		</P>

		<H2>Features</H2>

		<H3>Tailwind CSS</H3>

		<H3>Phosphor Icons</H3>

		<H3>Font Stack</H3>

		<P>Inter Variable, JetBrains Mono, and</P>

		<div class="grid grid-cols-3 my-4">
			<div class="font-semibold border-b border-neutral-300 py-2">Typeface</div>
			<div class="font-semibold col-span-2 border-b border-neutral-300 py-2">Sample</div>

			<div class="font-normal border-b border-neutral-300 py-2">Inter</div>
			<div class="font-normal col-span-2 border-b border-neutral-300 py-2">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>

			<div class="font-mono border-b border-neutral-300 py-2">JetBrains Mono</div>
			<div class="font-mono col-span-2 border-b border-neutral-300 py-2">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>

			<div class="font-serif border-b border-neutral-300 py-2">Caslon</div>
			<div class="font-serif col-span-2 border-b border-neutral-300 py-2">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
		</div>

		<H3>Light/Dark Theme</H3>

		<P>The site supports light and dark themes, styled using Tailwind <code>dark:</code> classes.</P>

		<div class="w-full flex items-center justify-center my-8">
			<ThemeToggle />
		</div>

		<H2>Components</H2>

		<H3>Filedrop</H3>

		<P>The Filedrop component allows a user to drag and drop files.</P>

		<div class="flex w-full items-center justify-center">
			<div class="m-8 aspect-square h-65">
				<Filedrop />
			</div>
		</div>
	</Article>
</div>

<Modal>
	<h1>Modal Example</h1>
</Modal>
