import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  private store$: BehaviorSubject<{ name: string, age: number }[]> = new BehaviorSubject(
    [{ name: 'A', age: 12 },
    { name: 'B', age: 13 },
    { name: 'C', age: 16 },
    { name: 'D', age: 18 },
    { name: 'E', age: 19 }]);

  getStudentList(): Observable<{ name: string, age: number }[]> {
    return this.store$;
  }

  deleteStudent(deleteName) {
    this.store$.next(this.store$.value.filter(({ name }) => name !== deleteName));
  }

}
