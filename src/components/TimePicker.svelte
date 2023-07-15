<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();
  import { fade } from 'svelte/transition';
  import RenderIf from '../utils/RenderIf.svelte';
  import TimePickerItem from './items/TimePickerItem.svelte';
  import { TIMES } from '../constants/time';
  import { checkTime, destructureTime } from '../utils/time';

  // props
  export let time: string;
  export let name = 'time-picker';
  export let withLabel = true;
  export let label = 'Label';

  // state
  let isOpen = false;
  let values = {
    hours: 0,
    minute: 0
  };
  let isValid = true;

  const toggleOpen = () => {
    isOpen = !isOpen;
  };

  const handleChange = (name: 'hours' | 'minute', e: any) => {
    values = {
      ...values,
      [name]: e.detail.value
    };
  };

  const handleOk = (e: any) => {
    const hours = values.hours < 10 ? '0' + values.hours : values.hours + '';
    const minute =
      values.minute < 10 ? '0' + values.minute : values.minute + '';

    toggleOpen();
    dispatch('ok', {
      value: `${hours}:${minute}`
    });
  };

  onMount(() => {
    const validResult = checkTime(time);

    isValid = validResult;

    const { hours, minute } = destructureTime(time);

    values = {
      hours: +hours,
      minute: +minute
    };
  });
</script>

<div class="relative mb-3 block text-left">
  <label
    for={name}
    class:hidden={!withLabel}
    class="block text-sm font-medium leading-6 tracking-wide text-gray-900 dark:text-white"
    >{label}</label
  >
  <div id={name} class="mt-2 w-full">
    <button
      type="button"
      class="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      class:ring-indigo-600={isOpen}
      class:ring-2={isOpen}
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      on:click={toggleOpen}
    >
      {time}
      <svg
        class="-mr-1 h-5 w-5 text-gray-400 transition-transform duration-150"
        class:rotate-180={isOpen}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <RenderIf isTrue={!isValid}>
      <span
        transition:fade={{ duration: 150 }}
        class="mt-2 inline-block text-sm font-medium text-red-500"
        >value not valid</span
      >
    </RenderIf>
  </div>

  <RenderIf isTrue={isOpen}>
    <div
      transition:fade={{ duration: 150 }}
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="grid grid-cols-2 gap-3 py-1 text-center" role="none">
        <TimePickerItem
          data={TIMES.hours}
          value={values.hours}
          on:change={e => handleChange('hours', e)}
          title="Hours"
        />
        <TimePickerItem
          data={TIMES.minutes}
          value={values.minute}
          on:change={e => handleChange('minute', e)}
          title="Minutes"
        />
      </div>
      <div class="mt-4 flex justify-center">
        <button type="button" on:click={handleOk}>Ok</button>
      </div>
    </div>
  </RenderIf>
</div>
