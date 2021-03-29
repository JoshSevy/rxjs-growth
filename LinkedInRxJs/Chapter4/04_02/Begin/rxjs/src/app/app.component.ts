import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() { 
    Observable.fromEvent(document, 'click').subscribe(x => console.log(x));
  }

  ngOnDestroy() { }
}
