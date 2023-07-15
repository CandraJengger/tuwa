<script lang="ts">
  import Button from './components/Button.svelte';
  import Input from './components/Input.svelte';
  import Layout from './components/Layout.svelte';

  let currency = 0;

  const handleCurrencyChange = e => {
    currency = e.detail.value;
  };
</script>

<Layout>
  <h1>Tuwa</h1>
  <Input
    type="number"
    value="{currency}"
    label="Username"
    on:change="{handleCurrencyChange}" />
  <Button />
  <Button type="secondary" />
</Layout>
