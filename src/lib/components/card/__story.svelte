<script lang="ts">
	import Card from "./card.svelte"
</script>

<div class="w-full max-w-4xl space-y-8">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<Card padding="sm" shadow="sm">
			{#snippet children()}
				<h3 class="mb-2 text-lg font-medium">Small Card</h3>
				<p class="text-sm text-neutral-600">This card has small padding and a subtle shadow.</p>
			{/snippet}
		</Card>

		<Card padding="md" shadow="md">
			{#snippet children()}
				<h3 class="mb-2 text-lg font-medium">Medium Card</h3>
				<p class="text-sm text-neutral-600">This card has medium padding and shadow.</p>
			{/snippet}
		</Card>

		<Card padding="lg" shadow="lg">
			{#snippet children()}
				<h3 class="mb-2 text-lg font-medium">Large Card</h3>
				<p class="text-sm text-neutral-600">This card has large padding and shadow.</p>
			{/snippet}
		</Card>
	</div>

	<div class="space-y-6">
		<Card padding="lg" shadow="md">
			{#snippet children()}
				<h2 class="mb-3 text-xl font-semibold">Feature Card</h2>
				<p class="mb-4 text-neutral-600">
					Cards are versatile containers that can hold various types of content. They provide visual
					separation and hierarchy to your interface.
				</p>
				<button class="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
					Learn More
				</button>
			{/snippet}
		</Card>

		<Card padding="md" shadow="none">
			{#snippet children()}
				<h3 class="mb-2 text-lg font-medium">No Shadow Card</h3>
				<p class="text-sm text-neutral-600">This card has no shadow for a flatter design.</p>
			{/snippet}
		</Card>
	</div>
</div>
