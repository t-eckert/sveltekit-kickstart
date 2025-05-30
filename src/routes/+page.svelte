<script lang="ts">
	import Modal from "$lib/components/modal/modal.svelte"
	import H1 from "$lib/elements/h1.svelte"
	import Filedrop from "$lib/components/filedrop/filedrop.svelte"
</script>

<article>
	<H1>Welcome to Thomas' Site Starter</H1>
	<p>
		This is my personal site starter template built with SvelteKit, Tailwind CSS, and TypeScript.
	</p>

	<h2>Features</h2>

	<h3>Tailwind CSS</h3>

	<h3>Phosphor Icons</h3>

	<h2>Components</h2>

	<h3>Filedrop</h3>

	<p>The Filedrop component allows a user to drag and drop files.</p>

	<div class="flex w-full items-center justify-center">
		<div class="m-8 aspect-square h-65">
			<Filedrop />
		</div>
	</div>
</article>

<Modal>
	<h1>Modal Example</h1>
</Modal>
