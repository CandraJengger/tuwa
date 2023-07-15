import { TIMES } from '../constants/time';

export const getDifferentTimeByMinute = (
  startTime: string,
  endTime: string
) => {
  if (!checkTime(startTime) || !checkTime(endTime)) {
    return;
  }

  const tempStartTime = destructureTime(startTime);
  const tempEndTime = destructureTime(endTime);

  if (+tempStartTime.hours > +tempEndTime.hours) {
    const total = {
      startTime: (24 - +tempStartTime.hours) * 60 + +tempStartTime.minute,
      endTime: +tempEndTime.hours * 60 + +tempEndTime.minute
    };

    return total.endTime + total.startTime;
  }

  const total = {
    startTime: +tempStartTime.hours * 60 + +tempStartTime.minute,
    endTime: +tempEndTime.hours * 60 + +tempEndTime.minute
  };

  return total.endTime - total.startTime;
};

export const checkTime = (time: string): boolean => {
  let isValid = true;

  if (time.indexOf(':') === -1) {
    isValid = false;
    return isValid;
  }

  const temp = time.split(':');
  const hours = temp[0];
  const minute = temp[1];

  if (
    TIMES.hours.indexOf(hours) === -1 ||
    TIMES.minutes.indexOf(minute) === -1
  ) {
    isValid = false;
    return isValid;
  }

  return isValid;
};

export const destructureTime = (time: string) => {
  const temp = time.split(':');
  const hours = temp[0];
  const minute = temp[1];

  return {
    hours,
    minute
  };
};

export const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedTime = `${hours} hours ${remainingMinutes} minutes`;
  return formattedTime;
};
