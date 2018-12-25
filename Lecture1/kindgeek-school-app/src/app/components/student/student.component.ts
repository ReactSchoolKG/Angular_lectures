import { Student } from './../../models/student';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() data: Student;
  @Output() studentAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addStudent() {
    this.studentAdded.emit(`Add please ${this.data.firstName} ${this.data.lastName}`);
  }

}
