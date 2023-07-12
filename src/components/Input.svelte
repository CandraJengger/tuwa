<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let withLabel = true;
  export let label = 'Label';
  export let type = 'text';
  export let name = 'input';

  export let value;

  function handleChange(e: any) {
    dispatch('change', {
      value: e.target.value
    });
  }
</script>

<div>
  <label
    for="first-name"
    class:hidden="{!withLabel}"
    class="block text-sm font-medium leading-6 tracking-wide text-gray-900"
    >{label}</label>
  <div class="mt-2">
    <input
      type="{type}"
      name="{name}"
      id="{name}"
      autocomplete="given-name"
      class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      value
      on:input="{handleChange}" />
  </div>
</div>
