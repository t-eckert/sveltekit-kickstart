<script lang="ts">
	import DottedBackdrop from "$lib/components/dotted-backdrop/dotted-backdrop.svelte"

	let { message }: { message: string } = $props()
</script>

<section
	class="relative flex h-full min-h-96 w-full items-center justify-center rounded-md border border-neutral-200 outline-1 outline-neutral-100"
>
	<div class="absolute inset-0 -z-30 h-full w-full">
		<DottedBackdrop />
	</div>
	<p class="rounded bg-white px-2 py-1 text-xl font-semibold text-neutral-700 select-none">
		{message}
	</p>
</section>
