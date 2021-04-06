import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ldrxjs';
  observable$;

  ngOnInit() {
    const observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    observable$.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('this is the end')
    );

  }

  ngOnDestroy() {
    this.observable$.unsubscribe();
  }
}
