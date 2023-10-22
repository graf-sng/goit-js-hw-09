const elements = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let timerId = null;
elements.stop.disabled = true;

elements.start.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  elements.start.disabled = true;
  elements.stop.disabled = false;
});

elements.stop.addEventListener('click', () => {
  clearInterval(timerId);
  elements.start.disabled = false;
  elements.stop.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
