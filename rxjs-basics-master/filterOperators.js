import { of, fromEvent, interval } from 'rxjs';
import { first, take, takeWhile, map, takeUntil } from 'rxjs/operators';

const numbers$ = of(1,2,3,4,5);
const click$ = fromEvent(document, 'click');

numbers$.pipe(
  map(event => ({
    x: event.clientX,
    y: event.clientY
  })),
  takeWhile(({y}) => y <= 200)
).subscribe({
  next: console.log,
  complete: () => console.log('Complete')
})

const counter$ = interval(1000);

const click$ = fromEvent(document, 'click');

counter$.pipe(
  takeUntil(click$)
).subscribe(console.log);