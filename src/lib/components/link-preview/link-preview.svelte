<script lang="ts">
	import { Avatar, LinkPreview } from "bits-ui"
	import CalendarBlank from "phosphor-svelte/lib/CalendarBlank"
	import MapPin from "phosphor-svelte/lib/MapPin"
</script>

<LinkPreview.Root>
	<LinkPreview.Trigger
		href="https://x.com/huntabyte"
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-xs underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
	>
		<Avatar.Root
			class="data-[status=loaded]:border-foreground bg-muted text-muted-foreground h-12 w-12 rounded-full border border-transparent text-[17px] font-medium uppercase"
		>
			<div
				class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-transparent"
			>
				<Avatar.Image src="/avatar-1.png" alt="@huntabyte" />
				<Avatar.Fallback class="border-muted border">HB</Avatar.Fallback>
			</div>
		</Avatar.Root>
	</LinkPreview.Trigger>
	<LinkPreview.Content
		class="border-muted bg-background shadow-popover w-[331px] rounded-xl border p-[17px]"
		sideOffset={8}
	>
		<div class="flex space-x-4">
			<Avatar.Root
				class="data-[status=loaded]:border-foreground bg-muted text-muted-foreground h-12 w-12 rounded-full border border-transparent text-[17px] font-medium uppercase"
			>
				<div
					class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-transparent"
				>
					<Avatar.Image src="/avatar-1.png" alt="@huntabyte" />
					<Avatar.Fallback class="border-muted border">HB</Avatar.Fallback>
				</div>
			</Avatar.Root>
			<div class="space-y-1 text-sm">
				<h4 class="font-medium">@huntabyte</h4>
				<p>I do things on the internet.</p>
				<div class="text-muted-foreground flex items-center gap-[21px] pt-2 text-xs">
					<div class="flex items-center text-xs">
						<MapPin class="mr-1 size-4" />
						<span> FL, USA </span>
					</div>
					<div class="flex items-center text-xs">
						<CalendarBlank class="mr-1 size-4" />
						<span> Joined May 2020</span>
					</div>
				</div>
			</div>
		</div>
	</LinkPreview.Content>
</LinkPreview.Root>
