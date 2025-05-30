<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet
  };

  const { children }: Props = $props();
</script>

<tbody class="">
  {@render children()}
</tbody>