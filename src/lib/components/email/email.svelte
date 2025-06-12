<script lang="ts">
	let {addr}: {addr: string} = $props();
</script>

<a href="mailto:{addr}" class="lowercase text-decoration-none">
	{addr}
</a>
