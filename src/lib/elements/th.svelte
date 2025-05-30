<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet,
    colspan?: number,
    rowspan?: number,
    scope?: 'col' | 'row' | 'colgroup' | 'rowgroup'
  };

  const { colspan, rowspan, scope, children }: Props = $props();
</script>

<th 
  {colspan} 
  {rowspan} 
  {scope} 
  class=""
>
  {@render children()}
</th>