import { Component, OnInit, EventEmitter } from '@angular/core';
import { Student } from '../interfaces/student.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  public StudentArray: Student[] = [{ studentId: "0"}];

  oncheckclicked:EventEmitter<Student[]> = new EventEmitter<Student[]>(); 
  ngOnInit() {
  }





  oncheckStudnet(id):void
{
      
      var student = {studentId:id};
      this.StudentArray.push(student);
      this.StudentArray = this.StudentArray.filter(s=>s.studentId != "0")
      console.log(this.StudentArray);
     this.oncheckclicked.emit(this.StudentArray);
}

}
