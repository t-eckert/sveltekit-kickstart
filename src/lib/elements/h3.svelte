<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet
  };

  const { children }: Props = $props();
</script>

<h3 class="">
  {@render children()}
</h3>