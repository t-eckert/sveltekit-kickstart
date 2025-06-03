<script lang="ts">
	import { Avatar } from "bits-ui"

	interface Props {
		src?: string
		alt?: string
		fallback?: string
		size?: "sm" | "md" | "lg"
		delayMs?: number
	}

	let { 
		src = "https://images.unsplash.com/photo-1747077560968-aa04de91d6f4?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt = "@huntabyte",
		fallback = "HB",
		size = "md",
		delayMs = 200
	}: Props = $props()

	const sizeClasses = {
		sm: "h-8 w-8 text-sm",
		md: "h-12 w-12 text-[17px]", 
		lg: "h-16 w-16 text-xl"
	}
</script>

<Avatar.Root
	{delayMs}
	class="data-[status=loaded]:border-foreground bg-muted text-muted-foreground {sizeClasses[size]} rounded-full border font-medium uppercase data-[status=loading]:border-transparent"
>
	<div
		class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-transparent"
	>
		<Avatar.Image {src} {alt} />
		<Avatar.Fallback class="border-muted border">{fallback}</Avatar.Fallback>
	</div>
</Avatar.Root>
