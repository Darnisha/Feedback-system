// built-in modules and components... 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules added...
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components added...
import { LoginPageComponent } from './login-page/login-page.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

import { ApiServicesService } from './services/api-services.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DepartmentListComponent,
    FacultyListComponent,
    FeedbackFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
