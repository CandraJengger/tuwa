<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let label = 'Button';
  export let type: 'primary' | 'secondary' = 'primary';
  export let htmlType: 'button' | 'submit' = 'button';
  export let size: 'small' | 'base' = 'base';
  export let block: boolean = true;

  const getType = () => {
    switch (type) {
      case 'secondary':
        return 'bg-transparent text-slate-900 dark:highlight-white/20 dark:text-indigo-500 dark:hover:text-indigo-400';

      default:
        return 'bg-slate-900 text-white hover:bg-slate-700 dark:highlight-white/20 dark:bg-indigo-500 dark:hover:bg-indigo-400';
    }
  };

  const getSize = () => {
    switch (size) {
      case 'small':
        return 'h-10';

      default:
        return 'h-12';
    }
  };

  function handleSubmit() {
    dispatch('click');
  }
</script>

<button
  class:w-full={block}
  class={`inline-flex items-center justify-center rounded-lg px-6 font-semibold focus:outline-none focus:ring-2 
  focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${getType()} ${getSize()}`}
  type={htmlType}
  on:click={handleSubmit}
>
  {label}
</button>
