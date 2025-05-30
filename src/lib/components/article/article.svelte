<script lang="ts">
	let { children } = $props()
</script>

<article class="w-full max-w-2xl flex flex-col items-start gap-2">
	{@render children()}
</article>
