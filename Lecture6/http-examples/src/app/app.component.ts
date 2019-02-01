import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchControl = new FormControl('');
  title = 'http-examples';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.searchControl
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(search => this.httpService.postcodeAutocomplete(search)))
      .subscribe(
        res => console.log('1', res),
        err => console.log('ERROR!:', err));
  }
}
