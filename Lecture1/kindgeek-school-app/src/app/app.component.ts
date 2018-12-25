import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public students: Student[] = [
    { firstName: 'Petro', lastName: 'Pavlenko' },
    { firstName: 'Tania', lastName: 'Patsai' },
    { firstName: 'Ivan', lastName: 'Krop' },
    { firstName: 'Dmytro', lastName: 'Litvinchuk' },
    { firstName: 'Vladyslav', lastName: 'Lytvynenko' },
    { firstName: 'Lesia', lastName: 'Dmytrus' },
    { firstName: 'Yuriy', lastName: 'Selskiy' },
    { firstName: 'Yuriy', lastName: 'Zitynyuk' },
    { firstName: 'Yuriy', lastName: 'Dyakiv' }
  ];

  public msgs: string[] = [];
  title = 'kindgeek-school-app';

  addNewStudent(msg: string) {
    this.msgs.unshift(msg);
  }
}
