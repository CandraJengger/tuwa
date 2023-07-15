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
    // handleToggleModal();
    // const totalTime = getDifferentTimeByMinute(time.startTime, time.endTime);
    // differentTime = totalTime;
    // total = totalTime * (price / 60);
    var canvas = document.createElement('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 512;
    context.fillStyle = '#0f172a';
    context.fillRect(0, 0, 512, 512);

    context.fillStyle = '#3b82f6'; // Set your desired fill color
    context.font = `500 150px Delius Swash Caps`; // 32 62
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Tuwa', 512 / 2, 512 / 2);

    const data = canvas.toDataURL('image/png');

    console.log(data);
    fetch(data)
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        console.log(url);
      });
  };
</script>

<Layout>
  <div class=" mb-9 text-center">
    <h1
      class="mb-2 font-delius-swash-caps text-4xl font-medium text-slate-900 dark:text-indigo-500"
    >
      Tuwa
    </h1>
    <h2 class="mx-auto max-w-xs text-gray-600 dark:text-gray-300">
      to help you calculate how many hours and total to pay
    </h2>
  </div>
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
