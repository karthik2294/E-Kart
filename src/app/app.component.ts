import { Component, EventEmitter } from '@angular/core';
import{Student} from '../app/interfaces/student.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public StudentArray: Student[] = [{ studentId: "0"}];
  public items = [] = ['Home', 'About', 'Contact']

  CatchStudentDetails(ids:Student[]):void
  {
    this.StudentArray = ids;
    console.log("test", this.StudentArray)
  }

  


  title = 'app';
}
