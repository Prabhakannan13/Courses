import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllCoursesComponent } from './view-all-courses/view-all-courses.component';

const appRoutes:Routes=[
  {
    path:"",component:AddcourseComponent
  },
  {
    path:"view all course",component:ViewAllCoursesComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    NavbarComponent,
    ViewAllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
