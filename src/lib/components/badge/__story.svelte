<script lang="ts">
	import Badge from "./badge.svelte"

	const statusExamples = [
		{ text: "Active", color: "green" as const },
		{ text: "Pending", color: "yellow" as const },
		{ text: "Error", color: "red" as const },
		{ text: "Info", color: "blue" as const },
		{ text: "Warning", color: "orange" as const },
		{ text: "Default", color: "neutral" as const }
	]

	const allColors = [
		{ text: "Neutral", color: "neutral" as const },
		{ text: "Red", color: "red" as const },
		{ text: "Orange", color: "orange" as const },
		{ text: "Yellow", color: "yellow" as const },
		{ text: "Green", color: "green" as const },
		{ text: "Blue", color: "blue" as const },
		{ text: "Indigo", color: "indigo" as const },
		{ text: "Purple", color: "purple" as const },
		{ text: "Pink", color: "pink" as const }
	]
</script>

<div class="w-full max-w-4xl space-y-8">
	<div class="space-y-4">
		<h3 class="text-lg font-medium">Status Badges</h3>
		<div class="flex flex-wrap gap-2">
			{#each statusExamples as badge}
				<Badge text={badge.text} color={badge.color} />
			{/each}
		</div>
	</div>

	<div class="space-y-4">
		<h3 class="text-lg font-medium">All Colors</h3>
		<div class="flex flex-wrap gap-2">
			{#each allColors as badge}
				<Badge text={badge.text} color={badge.color} />
			{/each}
		</div>
	</div>
</div>