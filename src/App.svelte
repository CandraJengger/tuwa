<script lang="ts">
  import Button from './components/Button.svelte';
  import Gap from './components/Gap.svelte';
  import Input from './components/Input.svelte';
  import Layout from './components/Layout.svelte';
  import TimePicker from './components/TimePicker.svelte';

  let currency = 27000;
  let time = {
    startTime: '12:00',
    endTime: '12:00'
  };

  const handleCurrencyChange = e => {
    currency = e.detail.value;
  };

  const handleTimeChange = (name: 'startTime' | 'endTime', e: any) => {
    time = {
      ...time,
      [name]: e.detail.value
    };
  };
</script>

<Layout>
  <h1>Tuwa</h1>
  <div class="grid grid-cols-1">
    <Input
      type="number"
      value={currency}
      label="Price per hour"
      on:change={handleCurrencyChange}
    />
    <Gap width={10} height={32} />
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <TimePicker
        label="Start Time"
        name="startTime"
        time={time.startTime}
        on:ok={e => handleTimeChange('startTime', e)}
      />
      <TimePicker
        label="End Time"
        name="endTime"
        time={time.endTime}
        on:ok={e => handleTimeChange('endTime', e)}
      />
    </div>
    <div>
      <Gap width={10} height={32} />
      <Button label="Submit" />
    </div>
  </div>
</Layout>
