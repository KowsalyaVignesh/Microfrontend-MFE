import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import { MatSelectModule } from '@angular/material/select';
import { AssignProjectComponent } from '../assign-project/assign-project.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MatSelectModule,
    RouterModule.forChild([
      {
        path:'',component:ProjectDetailsComponent
      },
      {
        path:'assign-project',component:AssignProjectComponent
      }
    ])
  ]
})
export class ProjectDetailsModule { }
