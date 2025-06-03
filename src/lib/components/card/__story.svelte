<script lang="ts">
	import Card from "./card.svelte"
</script>

<div class="w-full max-w-4xl space-y-8">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<Card padding="sm" shadow="sm">
			{#snippet children()}
				<h3 class="text-lg font-medium mb-2">Small Card</h3>
				<p class="text-neutral-600 text-sm">This card has small padding and a subtle shadow.</p>
			{/snippet}
		</Card>

		<Card padding="md" shadow="md">
			{#snippet children()}
				<h3 class="text-lg font-medium mb-2">Medium Card</h3>
				<p class="text-neutral-600 text-sm">This card has medium padding and shadow.</p>
			{/snippet}
		</Card>

		<Card padding="lg" shadow="lg">
			{#snippet children()}
				<h3 class="text-lg font-medium mb-2">Large Card</h3>
				<p class="text-neutral-600 text-sm">This card has large padding and shadow.</p>
			{/snippet}
		</Card>
	</div>

	<div class="space-y-6">
		<Card padding="lg" shadow="md">
			{#snippet children()}
				<h2 class="text-xl font-semibold mb-3">Feature Card</h2>
				<p class="text-neutral-600 mb-4">
					Cards are versatile containers that can hold various types of content. They provide
					visual separation and hierarchy to your interface.
				</p>
				<button class="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
					Learn More
				</button>
			{/snippet}
		</Card>

		<Card padding="md" shadow="none">
			{#snippet children()}
				<h3 class="text-lg font-medium mb-2">No Shadow Card</h3>
				<p class="text-neutral-600 text-sm">This card has no shadow for a flatter design.</p>
			{/snippet}
		</Card>
	</div>
</div>