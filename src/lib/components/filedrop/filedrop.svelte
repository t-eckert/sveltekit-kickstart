<script lang="ts">
	import { File } from "phosphor-svelte"
	import Button from "$lib/components/button/button.svelte"
</script>

<div
	class="group h-full w-full rounded border border-neutral-100 bg-white p-1 transition-all group-hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:group-hover:shadow-neutral-800"
>
	<div
		class="flex h-full w-full items-center justify-center rounded-xs border border-neutral-100 bg-neutral-50 shadow-inner transition-all group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800"
	>
		<div class="flex flex-col items-center gap-1">
			<div class="mb-2 text-neutral-500 transition-transform group-hover:rotate-8">
				<File class="h-8 w-8" />
			</div>
			<span class="text-sm font-medium text-neutral-600 select-none">Drag and drop files here</span>
			<span class="text-sm font-medium text-neutral-600 select-none">or</span>
			<Button><span class="text-sm">Browse local files</span></Button>
		</div>
	</div>
</div>
