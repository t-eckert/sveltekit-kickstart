<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet,
    for?: string
  };

  const { for: htmlFor, children }: Props = $props();
</script>

<label 
  for={htmlFor} 
  class=""
>
  {@render children()}
</label>