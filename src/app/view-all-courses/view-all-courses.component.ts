import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.component.html',
  styleUrls: ['./view-all-courses.component.css']
})
export class ViewAllCoursesComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewCourse().subscribe(
      (data)=>{
        this.viewcourse=data
      }
    )
  }

  viewcourse=[]

  ngOnInit(): void {
  }

}
