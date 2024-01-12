/**
 * @name waitFor
 * @definition used to wait for a specified amount of time before continuing execution, calculated in milliseconds.
 * @params {number} wait - the amount of time to wait in milliseconds.
 * @returns {Promise<void>} a promise that resolves when the wait is complete.
 */
export const waitFor = (wait: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, wait));
};

export type Duration = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

/**
 * @name printShortCountdown
 * @description Prints out the seconds as a formated string like 00:00:00
 * @param seconds the number of seconds to print
 * @returns a string in HH:MM:SS format
 */
export const printShortCountdown = (seconds: number) => {
  const pad = (num: number) => num.toString().padStart(2, '0');
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${pad(hours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
};

/**
 * @name printCountdownDuration
 * @description returns a human readable string of the duration remaining
 * @param {Duration} duration in DD:HH:MM:SS format.
 * @remark if any unit is 0 it will not be printed.
 */
export const printCountdownDuration = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: Duration) => {
  const pad = (num: number) => num.toString().padStart(2, '0');
  const daysString = days > 0 ? `${days}d ` : '';
  const hoursString = hours > 0 ? `${hours}h ` : '';
  const minutesString = minutes > 0 ? `${minutes}m ` : '';
  const secondsString = `${pad(seconds)}s`;
  return `${daysString}${hoursString}${minutesString}${secondsString}`;
};

/**
 * @name durationFromSeconds
 */
export const durationFromSeconds = (seconds: number): Duration => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return { days, hours, minutes, seconds: remainingSeconds };
};
