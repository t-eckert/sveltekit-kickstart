<script lang="ts">
	import routes from "./routes"
</script>

<nav>
	<ul>
		{#each routes as route}
			<li>
				<a href={route.path} class="text-sm font-medium text-neutral-700 hover:text-neutral-900">
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
