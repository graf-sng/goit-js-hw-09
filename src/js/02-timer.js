import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let difference = 0;

const elements = {
  input: document.querySelector('[id="datetime-picker"]'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    difference = selectedDates[0] - new Date();
    if (difference < 0) {
      Notify.failure('Please choose a date in the future');
    } else {
      elements.start.disabled = false;
    }
  },
};

flatpickr(elements.input, options);

elements.start.disabled = true;
elements.start.addEventListener('click', handlerClick);

function handlerClick() {
  const timeId = setInterval(() => {
    if (difference <= 0) {
      clearInterval(timeId);
      elements.start.disabled = false;
    } else {
      elements.start.disabled = true;

      const { days, hours, minutes, seconds } = convertMs(difference);

      elements.days.textContent = addLeadingZero(days);
      elements.hours.textContent = addLeadingZero(hours);
      elements.minutes.textContent = addLeadingZero(minutes);
      elements.seconds.textContent = addLeadingZero(seconds);

      difference -= 1000;
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
