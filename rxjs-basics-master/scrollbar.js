import { fromEvent, interval } from 'rxjs';
import { filter, map, mapTo, scan, tap, takeWhile, takeUntil, debounceTime } from 'rxjs/operators';

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

const countdown = document.getElementById(
  'countdown'
);

const message = document.getElementById(
  'message'
);

const abortButton = document.getElementById(
  'abort'
);

const inputBox = document.getElementById(
  'text-input'
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
const abortClick$ = fromEvent(abortButton, 'click');

counter$.pipe(
  mapTo(-1),
  scan((accumulator, current) => {
    return accumulator + current;
  }, 10),
  tap(console.log),
  takeWhile(value => value >= 0),
  takeUntil(abortClick$)
).subscribe(value => {
  countdown.innerHTML = value;
  if (!value) {
    message.innerHTML = 'Liftoff!'
  }
});

const click$ = fromEvent(document, 'click');
const input$ = fromEvent(inputBox, 'keyup');

input$.pipe(
  debounceTime(1000)
).subscribe(console.log)