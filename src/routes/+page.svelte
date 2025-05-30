<script lang="ts">
	import Article from "$lib/components/article/article.svelte"

	import { H1, H2, H3, P, A } from "$lib/elements"

	import Filedrop from "$lib/components/filedrop/filedrop.svelte"
	import ThemeToggle from "$lib/theme/theme-toggle.svelte"
	import Indicator from "$lib/components/indicator/indicator.svelte"

	import {Balloon, HouseLine, PushPin, Sidebar,  Star, Tent} from "phosphor-svelte"

	import Modal from "$lib/components/modal/modal.svelte"
	import Json from "$lib/utils/json.svelte"
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

		<P>Phosphor Icons are used throughout the site for consistent and modern iconography.</P>

		<div class="w-full flex items-center justify-center my-8">
			<div class="grid grid-cols-3 gap-4">
				<Balloon class="h-6 w-6" />
				<HouseLine class="h-6 w-6" />
				<PushPin class="h-6 w-6" />
				<Sidebar class="h-6 w-6" />
				<Star class="h-6 w-6" />
				<Tent class="h-6 w-6" />
			</div>
		</div>

		<H3>Font Stack</H3>

		<P>Inter Variable, JetBrains Mono, and Caslon Libre.</P>

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

		<H3>Article</H3>

		<H3>Button</H3>

		<H3>Error</H3>

		<H3>Filedrop</H3>

		<P>The Filedrop component allows a user to drag and drop files.</P>

		<div class="flex w-full items-center justify-center">
			<div class="m-8 aspect-square h-65">
				<Filedrop />
			</div>
		</div>

		<H3>Form</H3>

		<H3>Head</H3>

		<H3>Indicator</H3>

		<div>
			<Indicator />
		</div>

		<H3>Modal</H3>

		<Modal>
			<h1>Modal Example</h1>
		</Modal>


		<H3>Panel</H3>

		<H2>Utilities</H2>

		<H3>JSON Display</H3>

			<Json props={{
			"key1": "value1",
			"key2": "value2",
			"key3": {
				"nestedKey1": "nestedValue1",
				"nestedKey2": "nestedValue2"
			}
				  }} />
	</Article>
</div>

