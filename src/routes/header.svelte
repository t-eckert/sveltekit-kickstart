<script lang="ts">
	import Home from "./home.svelte"
	import Navigation from "$lib/navigation/navigation.svelte"
</script>

<div class="mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-4 py-1">
	<Home />

	<div>
		<Navigation />
	</div>
</div>
