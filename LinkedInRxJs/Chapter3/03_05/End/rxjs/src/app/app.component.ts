import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    const numbers$ = Observable.interval(1000);
    const letters$ = Observable.of('a','b','c','d','e');

    letters$.switchMap(x => 
      numbers$
        .take(5)
        .map(i => i + x)
    ).subscribe(x => console.log(x));

  }

  ngOnDestroy() { }
}
