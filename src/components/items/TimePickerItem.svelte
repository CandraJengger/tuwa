<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let data: string[];
  export let title: string;

  export let value: number;

  function handleChange(e: number) {
    dispatch('change', {
      value: e
    });
  }
</script>

<div class="flex h-[300px] flex-col justify-start">
  <span class="border-b border-indigo-900 pb-1 font-semibold">
    {title}
  </span>
  <div role="select" class="scrollbar flex-auto overflow-y-scroll">
    {#each data as item}
      <option
        class="cursor-pointer rounded-lg border-4 border-white py-1 font-medium text-indigo-900 transition-all duration-150 ease-in-out hover:bg-indigo-100"
        class:bg-indigo-100={+item === value}
        on:click={() => handleChange(+item)}>{item}</option
      >
    {/each}
  </div>
</div>
