import { StudentService } from './services/student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lec4';
  public students$ = this._student.getStudentList();

  constructor(private _student: StudentService) { }

  delete({ name }) {
    this._student.deleteStudent(name);
  }
}
