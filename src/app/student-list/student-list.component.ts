import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student: any;
  selectedStudent: any;

  constructor(public homeService: HomeServiceService) { }

  ngOnInit() {
  }

  public selectStudent(student:any) {
    this.selectedStudent = student;
  }

}
