<script lang="ts">
	import type { PageProps } from "./$types"
	import CenterColumn from "$lib/layouts/center-column.svelte"
	import Json from "$lib/utils/json.svelte"

	let props: PageProps = $props()
</script>

<main>
	<div class="mt-12">
		<CenterColumn>
			<Json {props} />
		</CenterColumn>
	</div>
</main>
