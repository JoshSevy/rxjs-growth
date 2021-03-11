import { of, Observable } from 'rxjs';

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
    subscriber.complete();
    count += 1;
  }, 1000);

  return () => {
    console.log('called');
    clearInterval(id);
  }
});

exampleTwo.subscribe(observer);

