<script lang="ts">
	import Article from "$lib/components/article/article.svelte"

	import { H1, H2, H3, P, A } from "$lib/elements"

	import Filedrop from "$lib/components/filedrop/filedrop.svelte"
	import ThemeToggle from "$lib/theme/theme-toggle.svelte"
	import Indicator from "$lib/components/indicator/indicator.svelte"
	import Input from "$lib/components/input/input.svelte"

	import {
		Balloon,
		HouseLine,
		PushPin,
		Sidebar,
		Star,
		Tent,
		ArrowUp,
		Binoculars
	} from "phosphor-svelte"

	import Modal from "$lib/components/modal/modal.svelte"
	import Json from "$lib/utils/components/json.svelte"
	import Error from "$lib/components/error/error.svelte"
	import Button from "$lib/components/button/button.svelte"
	import Card from "$lib/components/card/card.svelte"
	import Accordion from "$lib/components/accordion/accordion.svelte"
	import AspectRatio from "$lib/components/aspect-ratio/aspect-ratio.svelte"
	import Avatar from "$lib/components/avatar/avatar.svelte"
	import Calendar from "$lib/components/calendar/calendar.svelte"
	import Checkbox from "$lib/components/checkbox/checkbox.svelte"
	import Badge from "$lib/components/badge/badge.svelte"
	import Image from "$lib/components/image/image.svelte"
	import Window from "$lib/components/window/window.svelte"

	import { Title } from "$lib/typography"
</script>

<div class="my-12 flex justify-center">
	<Article>
		<Title>Welcome to Thomas' SvelteKit Kickstart</Title>

		<P>
			This is my personal site starter template built with SvelteKit, Tailwind CSS, and TypeScript.
		</P>

		<H2 text="Features" />

		<H3 text="Tailwind CSS" />

		<H3 text="Phosphor Icons" />

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

		<H3 text="Font Stack" />

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

		<H3 text="Light/Dark Theme" />

		<P>The site supports light and dark themes, styled using Tailwind <code>dark:</code> classes.</P
		>

		<div class="my-8 flex w-full items-center justify-center">
			<ThemeToggle />
		</div>

		<H2 text="Components" />

		<H3 text="Accordion" />

		<P>The Accordion component allows users to expand and collapse sections of content.</P>

		<Accordion items={[{ value: "1", title: "I have a secret.", content: "Hi" }]} />

		<H3 text="Article" />

		<P>The Article component is used to wrap text content and provide consistent styling.</P>

		<H3 text="Aspect Ratio" />

		<AspectRatio />

		<H3 text="Avatar" />

		<Avatar />

		<H3 text="Badge" />

		<div class="flex w-full items-center justify-center">
			<div class="grid grid-cols-3 justify-items-center gap-2">
				<Badge color="neutral" text="Neutral" />
				<Badge color="red" text="Red" />
				<Badge color="orange" text="Orange" />
				<Badge color="yellow" text="Yellow" />
				<Badge color="green" text="Green" />
				<Badge color="blue" text="Blue" />
				<Badge color="indigo" text="Indigo" />
				<Badge color="purple" text="Purple" />
				<Badge color="pink" text="Pink" />
			</div>
		</div>

		<H3 text="Button" />

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

		<H3 text="Calendar" />

		<Calendar />

		<H3 text="Card" />

		<div class="flex w-full items-center justify-center">
			<div class="w-full max-w-xs">
				<Card level={1}>
					<div class="flex flex-col gap-2">
						<Image
							src="https://images.unsplash.com/photo-1734607947797-2a61b996fd5d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Mountains"
						/>
						<H1 text="Card Example" />
						<P>
							This is a Card component. It can be used to display content in a visually appealing
							way.
						</P>
					</div>
				</Card>
			</div>
		</div>

		<H3 text="Checkbox" />

		<Checkbox />

		<H3 text="Error" />

		<div class="flex w-full items-center justify-center">
			<Error status={404} />
		</div>

		<H3 text="Filedrop" />

		<P>The Filedrop component allows a user to drag and drop files.</P>

		<div class="flex w-full items-center justify-center">
			<div class="m-8 aspect-square h-65">
				<Filedrop />
			</div>
		</div>

		<H3 text="Form" />

		<H3 text="Head" />

		<H3 text="Indicator" />

		<div class="flex w-full flex-col items-start justify-center gap-2">
			<Indicator color="green" message="Connected" />
			<Indicator color="red" message="Failed to send" />
			<Indicator color="yellow" message="Awaiting response" />
			<Indicator color="blue" message="New message" pulse={false} />
			<Indicator color="purple" message="Purple is active" />
			<Indicator color="gray" message="System offline" pulse={false} />
		</div>

		<H3 text="Input" />

		<div class="flex w-full items-center justify-center">
			<Input name="Name" placeholder="Enter your full name" />
		</div>

		<H3 text="Modal" />

		<Modal></Modal>

		<H3 text="Panel" />

		<H3 text="Window" />

		<Window background="bg-gradient-tr from-amber-100 via-cyan-100 to-purple-100">
			<div class="flex h-full w-full flex-col">
				<div class="flex w-full flex-row items-center gap-2 border-b border-b-neutral-200 px-4">
					<Binoculars class="h-4 w-4 text-neutral-700" /><input
						type="text"
						placeholder="Type something..."
						class="flex-1 py-2 focus:outline-none"
					/>
				</div>
				<div class="flex flex-1 flex-row items-start gap-3 p-3">
					<div class="flex flex-col gap-3">
						<div class="h-full w-full max-w-xl">
							<Image
								src="https://images.unsplash.com/photo-1698472505070-6d3b90afb530?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Blue Whale"
							/>
						</div>
					</div>
					<div class="max-w-md">
						<H1 text="The Humpback Whale" />
						<P>
							The humpback whale is a species of baleen whale known for its long pectoral fins and
							complex songs. They are found in oceans worldwide and are known for their acrobatic
							behavior, including breaching and slapping the water with their fins.
						</P>
					</div>
				</div>
			</div>
		</Window>

		<H2 text="Utilities" />

		<H3 text="JSON Display" />

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
