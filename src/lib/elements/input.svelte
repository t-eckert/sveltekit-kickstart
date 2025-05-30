<script lang="ts">
  type Props = {
    type?: string,
    name?: string,
    id?: string,
    value?: string | number,
    placeholder?: string,
    disabled?: boolean,
    required?: boolean,
    min?: number | string,
    max?: number | string,
    step?: number | string,
    pattern?: string,
    readonly?: boolean,
    autocomplete?: string,
    autofocus?: boolean
  };

  const { 
    type = 'text', 
    name, 
    id, 
    value, 
    placeholder, 
    disabled = false, 
    required = false,
    min,
    max,
    step,
    pattern,
    readonly = false,
    autocomplete,
    autofocus = false
  }: Props = $props();
</script>

<input 
  {type} 
  {name} 
  {id} 
  {value} 
  {placeholder} 
  {disabled} 
  {required}
  {min}
  {max}
  {step}
  {pattern}
  {readonly}
  {autocomplete}
  {autofocus}
  class=""
/>