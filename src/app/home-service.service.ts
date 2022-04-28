import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students = [
    {id:101, name: "Alex", description: "Alex Details", email: "alex@mail.com"},
    {id:102, name: "Ana", description: "Ana Details", email: "ana@mail.com"},
    {id:103, name: "Sara", description: "Sara Details", email: "sara@mail.com"},
    {id:104, name: "Jon", description: "Jon Details", email: "jon@mail.com"}
  ]

  constructor() { }

  public getStudents(): Array<{id:number, name:string, description:string, email:string}>{
    return this.students;}

  public createStudent(students: {id:number, name:string, description:string, email:string}){

    this.students.push(students)
  }

}
