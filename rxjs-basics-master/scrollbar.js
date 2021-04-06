import { fromEvent, interval } from 'rxjs';
import { filter, map, mapTo, scan } from 'rxjs/operators';

// helpers
function calculateScrollPercent(element) {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 1000;
}
// elems
const progressBar = document.querySelector(
  '.progress-bar'
);

//streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  //percent progress
  map(({target}) => calculateScrollPercent(
    target.scrollingElement
  ))
);

progress$.subscribe(percent => {
  progressBar.style.width = `${percent}`;
});

const counter$ = interval(1000);

counter$.pipe(
  mapTo(-1),
  scan((accumulator, current) => {
    return accumulator + current;
  }, 10),
  filter(value => value >= 0)
).subscribe(value => {
  countdown.innerHTML = value;
  if (!value) {
    message.innerHTML = 'Liftoff!'
  }
});