import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
  tap(value => console.log('before', value)),
  map(value => value * 10),
  tap({
    next: console.log('after', value),
    complete: () => console.log('done!')
  })
).subscribe(value => {
  console.log('from subscribe', value)
});