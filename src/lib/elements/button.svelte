<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet,
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean
  };

  const { type = 'button', disabled = false, children }: Props = $props();
</script>

<button 
  {type} 
  {disabled} 
  class=""
>
  {@render children()}
</button>