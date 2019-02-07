import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, concat, fromEvent, Observable, of, merge, interval } from 'rxjs';
import { delay, map, reduce, shareReplay, switchMap, tap, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('saveBtn') saveBtn: ElementRef;
  public info$ = this.getInfo().pipe(tap(elem => console.log(elem)), shareReplay());
  public id$ = this.info$.pipe(map(({ id }) => id));
  public login$ = this.info$.pipe(map(({ login }) => login));

  constructor() {
    // Map using example, takeWhile example
    // const interval$ = interval(1000);
    // interval$.pipe(
    //   map(item => item * 10),
    //   takeWhile(item => item < 100),
    //   pairwise(),
    //   skip(1),
    //   take(5),
    // )
    //   .subscribe(res => console.log(res));
    const source1$ = of(1, 2, 3);

    const source2$ = of(4, 5, 6);

    // const examples$ = concat(source1$, source2$);
    // examples$.subscribe(res => console.log(res));
    const source1m$ = interval(2500).pipe(mapTo(1));

    const source2m$ = interval(2000).pipe(mapTo(2));

    const source3m$ = interval(1500).pipe(mapTo(3));

    const source4m$ = interval(1000).pipe(mapTo(4));

    const examplesMerge$ = merge(source1m$, source2m$, source3m$, source4m$);
    examplesMerge$.subscribe(res => console.log(res));

    // Example Reduce
    // const source = of(1, 2, 3, 4);

    // const exampleReduce = source.pipe(reduce((acc, val) => acc + val));
    // exampleReduce.subscribe(res => console.log(res));

  }

  ngAfterViewInit(): void {
    fromEvent(this.saveBtn.nativeElement, 'click')
      .pipe(switchMap(res => this.getInfo()))
      .subscribe(res => console.log(res));
  }

  ngOnInit() {
    // this.loadDataToStore();
    // this.getDataForMapping();
    // this.getInfo()
    //   .pipe(
    //     map(({ id }) => id))
    //   .subscribe(
    //     res => console.log(res), err => console.log(err),
    //     () => console.log('complete')
    //   );
  }

  private getInfo() {
    return new Observable(observer => {
      fetch('https://api.github.com/orgs/nodejs')
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
          observer.complete();
        });
    }).pipe(delay(1000));
  }

  loadDataToStore() {
    concat(this.getInfo(), this.getInfo(), this.getInfo())
      .subscribe(res => console.log(res));
  }

  getDataForMapping() {
    combineLatest(this.getInfo(), this.id$, this.login$)
      .subscribe(res => console.log(res));
  }

}
