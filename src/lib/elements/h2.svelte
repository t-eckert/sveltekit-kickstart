<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet
  };

  const { children }: Props = $props();
</script>

<h2 class="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
  {@render children()}
</h2>
