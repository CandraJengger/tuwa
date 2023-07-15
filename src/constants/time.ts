export const TIMES = {
  hours: Array.from(Array(23).keys())?.map(item => {
    const temp = item + 1;
    if (temp < 10) {
      return '0' + temp;
    }

    return temp + '';
  }),
  minutes: Array.from(Array(12).keys())?.map(item => {
    const temp = item * 5;
    if (temp < 10) {
      return '0' + temp;
    }

    return temp + '';
  })
};
