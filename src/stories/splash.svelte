<script lang="ts">
	import DottedBackdrop from "$lib/components/dotted-backdrop/dotted-backdrop.svelte"
	import Button from "$lib/components/button/button.svelte"
	import { HouseLine } from "phosphor-svelte"
</script>

<section class="flex h-full min-h-96 w-full items-center justify-center rounded-md">
	<div class="mt-24 flex flex-row items-end gap-12">
		<div
			class="flex flex-col items-start justify-center gap-2 border-b-2 border-b-neutral-400 pb-2"
		>
			<div class="flex flex-row items-center gap-2">
				<HouseLine class="size-8 text-neutral-600" />
				<h1 class="font-serif text-3xl">Welcome to Houm</h1>
			</div>
			<p class="max-w-sm text-lg leading-snug text-neutral-500">
				Houm provides you with methods of entry to hundreds of unoccupied vacation homes in luxury
				locations.
			</p>
			<div class="flex flex-row items-center gap-2">
				<Button href="#"><span class="text-sm font-medium">Take me Houm!</span></Button>
				<Button role="tertiary" onclick={() => alert("Narc!")}
					><span class="text-sm font-medium">Call the police</span></Button
				>
			</div>
		</div>
		<img
			src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
			alt="A beautiful landscape"
			class="mt-4 w-full max-w-md rounded-lg object-cover shadow-lg"
		/>
	</div>
</section>

<div class="absolute inset-0 -z-30 h-full w-full">
	<DottedBackdrop />
</div>
