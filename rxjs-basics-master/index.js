import { of, Observable, fromEvent } from 'rxjs';

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

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete!')
}

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

const source$ = of(1,2,3,4,5);

source$.subscribe(observer);