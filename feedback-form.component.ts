import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    console.log("FeedbackFormComponent form value",form.value);
    // const isLoginCredentialsVerified = this._apiService.checkLoginCredentials(form.value);
    form.reset();
    // console.log("isLoginCredentialsVerified", isLoginCredentialsVerified);
    // isLoginCredentialsVerified ? (alert("Successfully Logged In!"), this._router.navigate(['/department'])) : alert("Invalid Credentials. Please sign in again!");
    
  }
}
