<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    children: Snippet,
    name?: string,
    id?: string,
    disabled?: boolean,
    required?: boolean,
    multiple?: boolean,
    size?: number
  };

  const { 
    name, 
    id, 
    disabled = false, 
    required = false, 
    multiple = false, 
    size, 
    children
  }: Props = $props();
</script>

<select 
  {name} 
  {id} 
  {disabled} 
  {required} 
  {multiple} 
  {size} 
  class=""
>
  {@render children()}
</select>