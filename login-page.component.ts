import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServicesService } from '../services/api-services.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isAdmin: boolean;
  @Output() adminChangeTrue = new EventEmitter();
  constructor(private _apiService: ApiServicesService, private _router: Router) { }

  ngOnInit() {
    this._apiService.currentMessage.subscribe(message => this.isAdmin = message)
  }

  submitForm(form) {
    console.log(form);
    // let isLoginCredentialsVerified;
    // const isLoginCredentialsVerified = this._apiService.checkLoginCredentials(form.value).then(data => console.log("data isss",data));
    this._apiService.checkLoginCredentials(form.value).then(data => {
      if (data.responseStatus === true) {
        this._apiService.setAdminValidation(data.isAdmin);
        if (data.isAdmin) {
          console.log("if passed in  this.adminChangeTrue.emit ");
          this._apiService.changeMessage(true)
          // this.adminChangeTrue.emit(true);
          let req = {
            admin: "admin",
            testOne: "",
            testTwo: "",
            testThree: "",
            testFour: "",
          }
          this._apiService.adminValidation(req).then(data => {

          });
        }
        else {
          console.log("else passed in admin validation");
          let req = {
            admin: "nonadmin",
            testOne: "",
            testTwo: "",
            testThree: "",
            testFour: "",
          }
          this._apiService.adminValidation(form.value).then(data => {

          });
        }

        console.log("if passed");
        alert("Successfully Logged In!"), this._router.navigate(['/department']);
      }
      else {
        console.log("else passed");
        alert("Invalid Credentials. Please sign in again!");
      }
    });
    form.reset();
    // console.log("isLoginCredentialsVerified", isLoginCredentialsVerified);
    // isLoginCredentialsVerified ? (alert("Successfully Logged In!"), this._router.navigate(['/department'])) : alert("Invalid Credentials. Please sign in again!");

  }

}
