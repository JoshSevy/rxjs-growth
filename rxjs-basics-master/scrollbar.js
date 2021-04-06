import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

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