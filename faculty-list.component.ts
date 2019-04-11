import { Component, OnInit } from '@angular/core';
// import { Observable } from "rxjs/Rx"
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {
  isAdmin: boolean;
  adminData: any;
  isAdminValidate = false;
  fieldData:any;
  fieldOne="";
  fieldTwo="";
  fieldThree="";
  fieldFour="";
  // facultyList:Observable<any[]>;
  facultyList = [{
    staffName: "Vijayalakshmi"
  },
  {
    staffName: "Krishnakumar"
  },
  {
    staffName: "Latha"
  },
  {
    staffName: "Premkumar"
  },
  {
    staffName: "Vijayalakshmi"
  },
  {
    staffName: "Subhulakshmi"
  },
  {
    staffName: "Karthickraj"
  },
  {
    staffName: "Vishnu"
  }]

  // public users$: Observable<any[]>

  constructor(private _apiService: ApiServicesService) { }

  ngOnInit() {
    this._apiService.adminRetriveValidation("formdata").then(data => {
      console.log("data in adminRetriveValidation it is", data);
      this.adminData = data.adminData;
      let len = this.adminData.length-1;
      console.log("data.adminData[len] is", data.adminData[len]);
      console.log("[len] is", len);
      console.log("data.adminData is", data.adminData);
      if (data.adminData[len].admin == "admin") {
        this.isAdminValidate = true;
        console.log("admin passed")
        
      }
      else {
        this.isAdminValidate = false;
        console.log("nonadmin passed")
        this._apiService.fieldRetriveValidation(data).then(data => {
          console.log("data in fieldRetriveValidation it is", data);
          this.fieldData = data.fieldData;
          let len = this.fieldData.length-1;
         
          this.fieldOne= "aaaaa";
          this.fieldTwo="aaaaa";
          this.fieldThree="aaaaa";
          this.fieldFour="aaaaa";

          // this.fieldOne= data.adminData[len].fieldOne;
          // this.fieldTwo=data.adminData[len].fieldOne;
          // this.fieldThree=data.adminData[len].fieldOne;
          // this.fieldFour=data.adminData[len].fieldOne;
        });
      }
    });

    this.isAdmin = this._apiService.getAdminValidation();
    console.log("this.isAdmin in ngon it is", this.isAdmin);

    if (this.isAdmin) {
      console.log("this.isAdmin true is ", this.isAdmin);

    }
    this._apiService.currentMessage.subscribe((message) => {
      // this.isAdmin = message;
      console.log("this.isAdmin in rxjs is", this.isAdmin)
    })

  }

  dept(data) {
    console.log("data is", data);
    switch (data) {
      case 'it':
        console.log('it passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'bio':
        console.log('bio passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'eee':
        console.log('eee passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'civil':
        console.log('civil passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'mech':
        console.log('mech passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'ece':
        console.log('ece passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'agri':
        console.log('agri passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'auto':
        console.log('auto passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      case 'cse':
        console.log('cse passed');
        this._apiService.listFaculty(data).then(data => {
          console.log("data in listFaculty it is", data);
          this.facultyList = data;
        });
        break;
      default:
        console.log("nothing passed");
    }
    console.log("this.facultyList in switch", this.facultyList);
  }

  // //////////////////////////////////
  submitForm(form) {
    console.log(form.value);
    this._apiService.fieldValidation(form.value).then(data => {
      console.log("data in fieldRetriveValidation it is", data);
      
    });
    // form.reset();
  
  }

}
