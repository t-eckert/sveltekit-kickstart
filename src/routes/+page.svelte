<script lang="ts">
	import Article from "$lib/components/article/article.svelte"

	import { H1, H2, H3, P } from "$lib/elements"

	import Filedrop from "$lib/components/filedrop/filedrop.svelte"
	import ThemeToggle from "$lib/theme/theme-toggle.svelte"

	import Modal from "$lib/components/modal/modal.svelte"
</script>

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

	<H3>Light/Dark Theme</H3>

	<div class="flex items-center justify-center">
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

<Modal>
	<h1>Modal Example</h1>
</Modal>
