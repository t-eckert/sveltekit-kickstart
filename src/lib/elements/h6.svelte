<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet
  };

  const { children }: Props = $props();
</script>

<h6 class="">
  {@render children()}
</h6>