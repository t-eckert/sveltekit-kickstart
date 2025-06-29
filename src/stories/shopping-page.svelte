<script lang="ts">
	import MensEasyPantBeech from "./assets/mens-easy-pant-beech.avif"

	import { H1, H2 } from "$lib/typography"
	import { ArrowRight } from "phosphor-svelte"
	import Image from "$lib/components/image/image.svelte"
	import Money from "$lib/components/money/money.svelte"
</script>

<div class="flex w-full items-center justify-center gap-1 bg-neutral-900 py-2">
	<span class="text-xs text-white uppercase">Receive 20% off your first order</span>
	<ArrowRight class="h-4 w-4 text-white" />
	<span class="text-xs text-white uppercase">Sign up for our newsletter</span>
</div>

<main class="mx-auto flex max-w-4xl flex-col p-4">
	<div class="flex flex-row items-start gap-4">
		<div class="max-w-md">
			<Image src={MensEasyPantBeech} />
		</div>
		<div class="w-full">
			<div class="flex flex-row items-center gap-1 text-sm text-neutral-500">
				<span>Men</span>
				<span>/</span>
				<span>Shop All Pants & Jeans</span>
			</div>
			<div class="flex w-full flex-row items-baseline justify-between">
				<H1>The Easy Pant</H1>
				<div>
					<Money value={59.99} currency="USD" class="text-2xl text-neutral-700" />
				</div>
			</div>
			<div class="flex flex-col items-start gap-1">
				<div class="text-xs text-neutral-500 uppercase">
					<span class="font-medium">Color</span>
					<span>Beech</span>
				</div>
				<div class="flex flex-row flex-wrap gap-2">
					<button
						class="h-7 w-7 rounded-full bg-neutral-300 hover:bg-neutral-400 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
					></button>
					<button
						class="h-7 w-7 rounded-full bg-[#5b4f3b] ring-1 ring-neutral-600 ring-offset-2 hover:bg-[#5b4f3b] focus:ring-2 focus:ring-neutral-500 focus:outline-none"
					></button>
				</div>
			</div>
		</div>
	</div>
</main>
