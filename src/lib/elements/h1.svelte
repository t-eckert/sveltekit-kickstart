<script lang="ts">
	let { children } = $props()
</script>

<h1 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
	{@render children()}
</h1>
