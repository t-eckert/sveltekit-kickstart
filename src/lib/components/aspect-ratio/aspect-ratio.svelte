<script lang="ts">
	import { AspectRatio } from "bits-ui"

	interface Props {
		ratio?: number
		src?: string
		alt?: string
		scale?: number
		rounded?: string
	}

	let {
		ratio = 14 / 9,
		src = "https://plus.unsplash.com/premium_photo-1734549547834-f38f7f6b295f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt = "an abstract painting",
		scale = 0.8,
		rounded = "15px"
	}: Props = $props()
</script>

<AspectRatio.Root {ratio} class="rounded-{rounded} scale-[{scale}] bg-transparent">
	<img {src} {alt} class="h-full w-full rounded-[{rounded}] object-cover" />
</AspectRatio.Root>
