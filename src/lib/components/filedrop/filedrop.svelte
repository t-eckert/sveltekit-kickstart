<script lang="ts">
	import { File } from "phosphor-svelte"
	import Button from "$lib/components/button/button.svelte"
</script>

<div
	class="bg-white dark:bg-neutral-900 group h-full w-full rounded border border-neutral-100 p-1 transition-all group-hover:shadow-md dark:border-neutral-700 dark:group-hover:shadow-neutral-800"
>
	<div
		class="flex bg-neutral-50 shadow-inner h-full w-full items-center justify-center rounded-xs border border-neutral-100 transition-all group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800"
	>
		<div class="flex flex-col items-center gap-1">
			<div class="text-neutral-500 group-hover:rotate-8 transition-transform mb-2">
				<File class="w-8 h-8" />
			</div>
			<span class="text-sm font-medium select-none text-neutral-600">Drag and drop files here</span>
			<span class="text-sm font-medium select-none text-neutral-600">or</span>
			<Button><span class="text-sm">Browse local files</span></Button>
		</div>
	</div>
</div>
