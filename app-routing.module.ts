import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent} from './login-page/login-page.component'
import { DepartmentListComponent } from './department-list/department-list.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

const routes: Routes = [
  {
    path:'homepage',
    component:LoginPageComponent
  },
  {
    path:'department',
    component:DepartmentListComponent
  },
  {
    path:'faculty/list',
    component:FacultyListComponent
  },
  {
    path:'feedback/form',
    component:FeedbackFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
