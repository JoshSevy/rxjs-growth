import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    const numbers$ = Observable.interval(1000);

    numbers$
      .take(5)
      .map(x => x * 10)
      .subscribe(x => console.log(x));
  }

  ngOnDestroy() {
  }
}
