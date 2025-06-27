<script lang="ts">
	import MensEasyPantBeech from "./assets/mens-easy-pant-beech.avif"

	import {H1, H2} from '$lib/elements';
	import {ArrowRight} from "phosphor-svelte"
	import Image from '$lib/components/image/image.svelte';
	import Money from '$lib/components/money/money.svelte';
</script>

<div class="w-full bg-neutral-900 py-2 flex items-center justify-center gap-1">
	<span class="text-white text-xs uppercase">Receive 20% off your first order</span>
	<ArrowRight class="h-4 w-4 text-white" />
	<span class="text-white text-xs uppercase">Sign up for our newsletter</span>
</div>

<main class="flex flex-col max-w-4xl mx-auto p-4">
	<div class="flex flex-row gap-4 items-start">
		<div class="max-w-md">
			<Image src={MensEasyPantBeech} />
		</div>
		<div class="w-full">
			<div class="flex flex-row gap-1 items-center text-sm text-neutral-500">
				<span>Men</span>
				<span>/</span>
				<span>Shop All Pants & Jeans</span>
			</div>
			<div class="flex flex-row items-baseline justify-between w-full">
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
				<div class="flex flex-row gap-2 flex-wrap">
					<button class="w-7 h-7 rounded-full bg-neutral-300 hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"></button>
					<button class="w-7 h-7 ring-neutral-600 ring-1 ring-offset-2 rounded-full bg-[#5b4f3b] hover:bg-[#5b4f3b] focus:outline-none focus:ring-2 focus:ring-neutral-500"></button>
				</div>
			</div>
		</div>
	</div>
</main>

