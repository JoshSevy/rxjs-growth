import { of, Observable, fromEvent, from, range, interval, timer } from 'rxjs';
import { reduce, map, pluck, mapTo, filter } from 'rxjs/operators';

console.clear();


// SETION ONE OBSERVABLES SCRATCH
/*
const observer = {
  next: value => console.log('next', value),
  error: error => console.log('error', error),
  complete: () => console.log('complete')
}

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});


// same as passing in observer from above
//! observable.subscribe(
//!   value => console.log('next', value),
//!   error => console.log('error', value),
//!   () => console.log('complete!')
//! );

const exampleTwo = new Observable(subscriber => {
  let count = 0;

  const id = setInterval(() => {
    subscriber.next(count);
    count += 1;
  }, 1000);

  return () => {
    console.log('called');
    clearInterval(id);
  }
});

// console.log('before');
// exampleTwo.subscribe(observer);
// console.log('after');

const subscription = exampleTwo.subscribe(
  observer
);

const subscriptionTwo = exampleTwo.subscribe(
  observer
);

subscription.add(subscriptionTwo);


setTimeout(() => {
  subscription.unsubscribe();
  // subscriptionTwo.unsubscribe();
}, 3500);

*/

// SECTION 2 CREATION OPERATORS

// const observer = {
//   next: val => console.log('next', val),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete!')
// }

/*!
//! Lesson Two Section 2
const source$ = fromEvent(document, 'keyup');

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
  console.log('unsubscribing');
  subOne.unsubscribe();
}, 3000);
*/


/*
 * Emits each item you provide in sequence, synchronously.
 * of literally just loops through the items and emits them,
 * there is no flattening involved. For instance, if you pass an
 * array the entire array will be emitted, not each item within
 * the array.
 */

// const source$ = of(1,2,3,4,5);

/*
* range(1, 5) takes in a starting value and ending value
* giving the same result as the example above using of
*/

/*
 * from operator allows iteration through what passed in
*/

// const source$ = from([1,2,3,4,5]);
//const source$ = from('Hello World');

//* Using from with a generator function

// function* hello() {
//   yield 'Hello';
//   yield 'World';
// }

// const iterator = hello();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// const source$ = from(fetch('https://api.github.com/users/octocat'));

// const source$ = from(iterator);

// source$.subscribe(observer);

//* LESSON 4 EMIT items based on a duration
//! Operators used interval, timer

// const timer$ = timer(0, 2000);

// timer$.subscribe(console.log)


//* Lesson 5 Transform streams using map operator

// of(1,2,3,4,5).pipe(
//   map((value) => value * 10)
// ).subscribe(console.log)

const keyup$ = fromEvent(document, 'keyup');

//!keycode with map
// const keycode$ = keyup$.pipe(
//   map(event => event.code)
// );

//!keycode with pluck same result
// const keycodeWithPluck$ = keyup$.pipe(
//   pluck('code')
// );

// const pressed$ = keyup$.pipe(
//   mapTo('Key Pressed!')
// );

// keyup$.subscribe(console.log);
// keycode$.subscribe(console.log);
// keycodeWithPluck$.subscribe(console.log);
// pressed$.subscribe(console.log);

//* Filter operator

// of(1,2,3,4,5).pipe(
//   filter(value => value > 2)
// ).subscribe(console.log)

// const keycode$ = keyup$.pipe(
//   map(event => event.code),
// )

// const enter$ = keycode$.pipe(
//   filter(code => code === 'Enter')
// )

// enter$.subscribe(console.log);
// keycode$.subscribe(console.log);

//* Reducer

const number = [1,2,3,4,5];

const totalReducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
 };
//! example array reduce
// const total = number.reduce(totalReducer, 0);

from(numbers).pipe(
  reduce(totalReducer, 0)
).subscribe()


//interval with reduce
interval(1000).pipe(
  take(3),
  reduce(totalReducer, 0)
).subscribe({
  next: console.log,
  complete: () => console.log("Complete!")
});