import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import { MatSelectModule } from '@angular/material/select';
import { AssignProjectComponent } from '../assign-project/assign-project.component';
import { MapsComponent } from '../maps/maps.component';



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
      },
      {
        path:'map',component:MapsComponent
      }
    ])
  ]
})
export class ProjectDetailsModule { }
