<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet,
    colspan?: number,
    rowspan?: number
  };

  const { colspan, rowspan, children }: Props = $props();
</script>

<td 
  {colspan} 
  {rowspan} 
  class=""
>
  {@render children()}
</td>