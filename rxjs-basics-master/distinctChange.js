import { of } from 'rxjs';
import {
  distinctUntilChanged,
  distinctUntilKeyChanged
} from 'rxjs/operators';

const numbers$ = of(1,1,2,3,3,3,4,5);

numbers$.pipe(
  distinctUntilKeyChanged()
).subscribe(console.log);

