import { Component } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public screenResizer$ = fromEvent(window, 'resize')
    .pipe(map(res => window.innerHeight));

  public timer$ = interval(1000)
    .pipe(
      filter(res => res % 2 === 0),
      map(res => res ** 2));

  constructor() {
  }
}
