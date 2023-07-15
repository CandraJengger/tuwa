<script lang="ts">
  export let isTrue = false;
</script>

{#if isTrue}
  <slot />
{/if}
