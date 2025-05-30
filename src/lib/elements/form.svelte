<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet,
    action?: string,
    method?: string,
    enctype?: string
  };

  const { action, method, enctype, children }: Props = $props();
</script>

<form 
  {action} 
  {method} 
  {enctype} 
  class=""
>
  {@render children()}
</form>