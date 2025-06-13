<script lang="ts">
	import Avatar from "./avatar.svelte"

	const examples = [
		{
			title: "With Image",
			src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
			alt: "John Doe",
			fallback: "JD",
			size: "md" as const
		},
		{
			title: "Fallback Only",
			src: undefined,
			alt: "Jane Smith",
			fallback: "JS",
			size: "md" as const
		},
		{
			title: "Small Size",
			src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
			alt: "Sarah Wilson",
			fallback: "SW",
			size: "sm" as const
		},
		{
			title: "Large Size",
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2674&auto=format&fit=crop",
			alt: "Mike Johnson",
			fallback: "MJ",
			size: "lg" as const
		}
	]
</script>

<div class="w-full max-w-2xl space-y-8">
	<div class="grid grid-cols-2 items-center gap-6 md:grid-cols-4">
		{#each examples as example}
			<div class="flex flex-col items-center space-y-2">
				<Avatar
					src={example.src}
					alt={example.alt}
					fallback={example.fallback}
					size={example.size}
				/>
				<span class="text-sm text-neutral-600">{example.title}</span>
			</div>
		{/each}
	</div>
</div>
