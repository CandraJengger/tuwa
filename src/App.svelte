<script lang="ts">
  import Button from './components/Button.svelte';
  import Gap from './components/Gap.svelte';
  import Input from './components/Input.svelte';
  import Layout from './components/Layout.svelte';
  import Modal from './components/Modal.svelte';
  import TimePicker from './components/TimePicker.svelte';
  import { currencyFormatToRupiah } from './utils/string';
  import { formatTime, getDifferentTimeByMinute } from './utils/time';

  let price = 27000;
  let time = {
    startTime: '12:00',
    endTime: '12:00'
  };
  let openModal = false;
  let total = 0;
  let differentTime = 0;

  const handlePriceChange = e => {
    price = e.detail.value;
  };

  const handleTimeChange = (name: 'startTime' | 'endTime', e: any) => {
    time = {
      ...time,
      [name]: e.detail.value
    };
  };

  const handleToggleModal = () => {
    openModal = !openModal;
  };

  const handleSubmit = () => {
    handleToggleModal();
    const totalTime = getDifferentTimeByMinute(time.startTime, time.endTime);
    differentTime = totalTime;
    total = totalTime * (price / 60);
  };
</script>

<Layout>
  <h1>Tuwa</h1>
  <div class="grid grid-cols-1">
    <Input
      type="number"
      value={price}
      label="Price per hour"
      on:change={handlePriceChange}
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
      <Button label="Submit" on:click={handleSubmit} />
    </div>
    <Modal open={openModal} on:toggle={handleToggleModal} title="Total">
      <p class="text-2xl text-gray-500">{currencyFormatToRupiah(total)}</p>
      <p class="mt-2 text-sm text-gray-500">
        {formatTime(differentTime)}
      </p>
    </Modal>
  </div>
</Layout>
