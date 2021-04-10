import { asyncScheduler, fromEvent, interval, mergeMap, switchMap } from 'rxjs';
import {
  filter,
  map,
  mapTo,
  scan,
  tap,
  takeWhile,
  takeUntil,
  debounceTime,
  pluck,
  distinctUntilChanged,
  debounce,
  throttleTime,
  mergeAll
 } from 'rxjs/operators';

 import { ajax } from 'rxjs/ajax';

 const BASE_URL = 'https://api.openbrewerydb.org/breweries';


// helpers
function calculateScrollPercent(element) {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
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
  throttleTime(30, asyncScheduler, {
    leading: false,
    trailing: true
  }),
  map(({target}) => calculateScrollPercent(
    target.scrollingElement
  )),
  tap(console.log)
);

progress$.subscribe(percent => {
  progressBar.style.width = `${percent}%`;
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
  debounceTime(200),
  pluck('target', 'value'),
  distinctUntilChanged(),
  switchMap(searchTerm => {
    return ajax.getJSON(
      `${BASE_URL}?by_name=?${searchTerm}`
      )
  })
).subscribe(cosole.log);