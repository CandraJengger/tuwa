<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class=" bg-slate-600 font-bold rounded-md">
  count is {count}
</button>
