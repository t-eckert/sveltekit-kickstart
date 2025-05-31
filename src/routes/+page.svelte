<script lang="ts">
	import Article from "$lib/components/article/article.svelte"

	import { H1, H2, H3, P, A } from "$lib/elements"

	import Filedrop from "$lib/components/filedrop/filedrop.svelte"
	import ThemeToggle from "$lib/theme/theme-toggle.svelte"
	import Indicator from "$lib/components/indicator/indicator.svelte"
	import Input from "$lib/components/input/input.svelte"

	import { Balloon, HouseLine, PushPin, Sidebar, Star, Tent, ArrowUp } from "phosphor-svelte"

	import Modal from "$lib/components/modal/modal.svelte"
	import Json from "$lib/utils/json.svelte"
	import Error from "$lib/components/error/error.svelte"
	import Button from "$lib/components/button/button.svelte"
	import Card from "$lib/components/card/card.svelte"
</script>

<div class="my-12 flex justify-center">
	<Article>
		<H1>Welcome to Thomas' Site Starter</H1>

		<P>
			This is my personal site starter template built with SvelteKit, Tailwind CSS, and TypeScript.
		</P>

		<H2>Features</H2>

		<H3>Tailwind CSS</H3>

		<H3>Phosphor Icons</H3>

		<P>Phosphor Icons are used throughout the site for consistent and modern iconography.</P>

		<div class="my-8 flex w-full items-center justify-center">
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

		<div class="my-4 grid grid-cols-3">
			<div class="border-b border-neutral-300 py-2 font-semibold">Typeface</div>
			<div class="col-span-2 border-b border-neutral-300 py-2 font-semibold">Sample</div>

			<div class="border-b border-neutral-300 py-2 font-normal">Inter</div>
			<div class="col-span-2 border-b border-neutral-300 py-2 font-normal">
				lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</div>

			<div class="border-b border-neutral-300 py-2 font-mono">JetBrains Mono</div>
			<div class="col-span-2 border-b border-neutral-300 py-2 font-mono">
				lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</div>

			<div class="border-b border-neutral-300 py-2 font-serif">Caslon</div>
			<div class="col-span-2 border-b border-neutral-300 py-2 font-serif">
				lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</div>
		</div>

		<H3>Light/Dark Theme</H3>

		<P>The site supports light and dark themes, styled using Tailwind <code>dark:</code> classes.</P
		>

		<div class="my-8 flex w-full items-center justify-center">
			<ThemeToggle />
		</div>

		<H2>Components</H2>

		<H3>Article</H3>

		<P>The Article component is used to wrap text content and provide consistent styling.</P>

		<H3>Button</H3>

		<div class="flex w-full items-center justify-center">
			<div class="grid grid-cols-3 justify-items-center gap-2">
				<Button role="primary"><span class="text-sm font-medium">Primary</span></Button>
				<Button role="secondary"><span class="text-sm font-medium">Secondary</span></Button>
				<Button role="tertiary"><span class="text-sm font-medium">Tertiary</span></Button>

				<Button role="primary" tone="positive"
					><span class="text-sm font-medium">Primary</span></Button
				>
				<Button role="secondary" tone="positive"
					><span class="text-sm font-medium">Secondary</span></Button
				>
				<Button role="tertiary" tone="positive"
					><span class="text-sm font-medium">Tertiary</span></Button
				>

				<Button role="primary" tone="negative"
					><span class="text-sm font-medium">Primary</span></Button
				>
				<Button role="secondary" tone="negative"
					><span class="text-sm font-medium">Secondary</span></Button
				>
				<Button role="tertiary" tone="negative"
					><span class="text-sm font-medium">Tertiary</span></Button
				>

				<Button role="primary" shape="circle"><span><ArrowUp class="h-5 w-5" /></span></Button>
				<Button role="secondary" shape="circle"><span><ArrowUp class="h-5 w-5" /></span></Button>
				<Button role="tertiary" shape="circle"><span><ArrowUp class="h-5 w-5" /></span></Button>

				<Button role="primary" shape="circle" tone="positive"
					><span><ArrowUp class="h-5 w-5" /></span></Button
				>
				<Button role="secondary" shape="circle" tone="positive"
					><span><ArrowUp class="h-5 w-5" /></span></Button
				>
				<Button role="tertiary" shape="circle" tone="positive"
					><span><ArrowUp class="h-5 w-5" /></span></Button
				>

				<Button role="primary" shape="circle" tone="negative"
					><span><ArrowUp class="h-5 w-5" /></span></Button
				>
				<Button role="secondary" shape="circle" tone="negative"
					><span><ArrowUp class="h-5 w-5" /></span></Button
				>
				<Button role="tertiary" shape="circle" tone="negative"
					><span><ArrowUp class="h-5 w-5" /></span></Button
				>
			</div>
		</div>

		<H3>Card</H3>

		<div class="flex w-full items-center justify-center">
			<div class="w-full max-w-md">
				<Card>
					<div class="flex flex-col gap-1">
						<H1>Card Example</H1>
						<P>
							This is a Card component. It can be used to display content in a visually appealing
							way.
						</P>
					</div>
				</Card>
			</div>
		</div>

		<H3>Error</H3>

		<div class="flex w-full items-center justify-center">
			<Error status={404} />
		</div>

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

		<div class="flex w-full flex-col items-start justify-center gap-2">
			<Indicator color="green" message="Connected" />
			<Indicator color="red" message="Failed to send" />
			<Indicator color="yellow" message="Awaiting response" />
			<Indicator color="blue" message="New message" pulse={false} />
			<Indicator color="purple" message="Purple is active" />
			<Indicator color="gray" message="System offline" pulse={false} />
		</div>

		<H3>Input</H3>

		<div class="flex w-full items-center justify-center">
			<Input name="Name" placeholder="Enter your full name" />
		</div>

		<H3>Modal</H3>

		<Modal>
			<h1>Modal Example</h1>
		</Modal>

		<H3>Panel</H3>

		<H2>Utilities</H2>

		<H3>JSON Display</H3>

		<Json
			props={{
				key1: "value1",
				key2: "value2",
				key3: {
					nestedKey1: "nestedValue1",
					nestedKey2: "nestedValue2"
				}
			}}
		/>
	</Article>
</div>
