<script lang="ts">
	import AspectRatio from "./aspect-ratio.svelte"

	const examples = [
		{
			title: "16:9 (Video)",
			ratio: 16 / 9,
			src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2669&auto=format&fit=crop",
			alt: "Mountain landscape in 16:9 aspect ratio"
		},
		{
			title: "4:3 (Classic)",
			ratio: 4 / 3,
			src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop",
			alt: "Forest path in 4:3 aspect ratio"
		},
		{
			title: "1:1 (Square)",
			ratio: 1,
			src: "https://images.unsplash.com/photo-1497436072909-f5e4a3a2eb8a?q=80&w=2664&auto=format&fit=crop",
			alt: "Sunflower in square aspect ratio"
		},
		{
			title: "3:2 (Photography)",
			ratio: 3 / 2,
			src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2669&auto=format&fit=crop",
			alt: "Coastal scene in 3:2 aspect ratio"
		}
	]
</script>

<div class="w-full max-w-4xl space-y-8">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each examples as example}
			<div class="space-y-2">
				<h3 class="text-sm font-medium text-neutral-700">{example.title}</h3>
				<AspectRatio
					ratio={example.ratio}
					src={example.src}
					alt={example.alt}
					scale={1}
					rounded="8px"
				/>
			</div>
		{/each}
	</div>
</div>
