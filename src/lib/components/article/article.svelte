<script lang="ts">
	let { children } = $props()
</script>

<article class="flex w-full max-w-2xl flex-col items-start gap-2">
	{@render children()}
</article>
