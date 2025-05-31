<script lang="ts">
	let { children } = $props()
</script>

<section class="rounded-md border border-neutral-100 p-3 shadow">
	{@render children()}
</section>
