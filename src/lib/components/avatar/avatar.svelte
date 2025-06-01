<script lang="ts">
	import { Avatar } from "bits-ui"
</script>

<Avatar.Root
	delayMs={200}
	class="data-[status=loaded]:border-foreground bg-muted text-muted-foreground h-12 w-12 rounded-full border text-[17px] font-medium uppercase data-[status=loading]:border-transparent"
>
	<div
		class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-transparent"
	>
		<Avatar.Image
			src="https://images.unsplash.com/photo-1747077560968-aa04de91d6f4?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="@huntabyte"
		/>
		<Avatar.Fallback class="border-muted border">HB</Avatar.Fallback>
	</div>
</Avatar.Root>
