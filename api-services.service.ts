import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
// import { map, catchError, tap } from 'rxjs/operators';
import { Http, RequestOptions, Headers, Response, } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  endpoint = 'http://localhost:3000/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  isAdminEntered = false;
  // constructor(private http: HttpClient) { }
  constructor(private _http: Http) { }

  changeMessage(message: boolean) {
    this.messageSource.next(message)
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("body res.json(); is", body);
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  checkLoginCredentials(formData) {
    return this._http.post(this.endpoint + '/login', JSON.stringify(formData), this.options).toPromise()
      .then(this.extractData).catch(this.handleError);
  }

  adminValidation(formData) {
    return this._http.post(this.endpoint + '/admin', JSON.stringify(formData), this.options).toPromise()
      .then(this.extractData).catch(this.handleError);
  }

  adminRetriveValidation(formData) {
    // return this._http.post(this.endpoint + '/retriveadmin', JSON.stringify(formData), this.options).toPromise()
    //   .then(this.extractData).catch(this.handleError);

    const req = { "test": "test" }
    return this._http.post(this.endpoint + '/retriveadmin', JSON.stringify(req), this.options).toPromise()
      .then(this.extractData).catch(this.handleError);
  }

  
  fieldValidation(formData) {
    return this._http.post(this.endpoint + '/field', JSON.stringify(formData), this.options).toPromise()
      .then(this.extractData).catch(this.handleError);
  }

  fieldRetriveValidation(formData) {
    // return this._http.post(this.endpoint + '/retriveadmin', JSON.stringify(formData), this.options).toPromise()
    //   .then(this.extractData).catch(this.handleError);

    const req = { "test": "test" }
    return this._http.post(this.endpoint + '/retrivefield', JSON.stringify(req), this.options).toPromise()
      .then(this.extractData).catch(this.handleError);
  }

  setAdminValidation(isAdmin) {
    console.log("setAdminValidation passed and isAdmin is", isAdmin);
    this.isAdminEntered = isAdmin;
    console.log(" this.isAdminEntered is", this.isAdminEntered)
  }

  getAdminValidation() {
    return this.isAdminEntered;
  }

  // checkLoginCredentials(formData) {
  //   //formData==> {registerNumber: "aaa", password: "bbb"}
  //   console.log("formData in this.checkLoginCredentials", formData);
  //   // console.log("this.endpoint is", this.endpoint);

  //   //api call to checkLoginCredentials and response=res(true or false)
  //   const userAccountDb = [{ registerNumber: "aaa", password: "pw1" }, { registerNumber: "bbb", password: "pw2" }, { registerNumber: "ccc", password: "pw3" }]
  //   console.log("userAccountDb is", userAccountDb);
  //   const isUserDataExist = userAccountDb.filter(data => {
  //     if ((data.registerNumber == formData.registerNumber) && (data.password == formData.password)) {
  //       console.log("formdata is", formData);
  //       return true;
  //     }
  //     else {
  //       return false;
  //     }
  //   });
  //   console.log("isUserDataExist.length", isUserDataExist.length);
  //   return isUserDataExist.length == 1;
  // }

  // checkLoginCredentials(formData) {
  //   console.log(formData);
  //   const req=formData;
  //   return this.http.post<any>(this.endpoint + 'login', JSON.stringify(req), this.httpOptions).pipe(
  //     tap((response) => console.log(`Is Login validated=${response}`)),
  //     catchError(this.handleError<any>('Login Validation'))
  //   );
  // }

  // listFaculty(dept){
  //   console.log(dept);
  //   const req={ "faculty": dept}
  //   return this.http.post<any>(this.endpoint + 'faculty', JSON.stringify(req), this.httpOptions).pipe(
  //     tap((response) => console.log(`Faculty List is=${response}`)),
  //     catchError(this.handleError<any>('List Faculty'))
  //   );
  // }

  listFaculty(dept) {
    const req = { "faculty": dept }
    return this._http.post(this.endpoint + '/faculty', JSON.stringify(req), this.options).toPromise()
      .then(this.extractData).catch(this.handleError);
  }

  xxxlistFaculty(dept) {
    const faculty = {
      'it': [{
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
      }],
      'bio': [{
        staffName: "Rajendran"
      },
      {
        staffName: "Kumar"
      },
      {
        staffName: "Lakshmi"
      },
      {
        staffName: "Prem"
      },
      {
        staffName: "Viji"
      },
      {
        staffName: "Subhaleka"
      },
      {
        staffName: "Raj"
      },
      {
        staffName: "Ishu"
      }],
      'eee': [{
        staffName: "Krishni"
      },
      {
        staffName: "Kumar"
      },
      {
        staffName: "Latha kumari"
      },
      {
        staffName: " Rekha "
      },
      {
        staffName: " Akshaya"
      },
      {
        staffName: "Subhulakshmi"
      },
      {
        staffName: "Karthickraj"
      },
      {
        staffName: "Vishnu"
      }],
      'civil': [{
        staffName: "Ethiraj"
      },
      {
        staffName: "chaya"
      },
      {
        staffName: "Varadhan"
      },
      {
        staffName: "Senapathi"
      },
      {
        staffName: "Dhevaraj"
      },
      {
        staffName: "Subhu"
      },
      {
        staffName: "Sudha"
      },
      {
        staffName: "Vimal"
      }],
      'mech': [{
        staffName: "Thanisha"
      },
      {
        staffName: "Dharun"
      },
      {
        staffName: "Latha"
      },
      {
        staffName: "Siva kumar"
      },
      {
        staffName: "Lakshmi"
      },
      {
        staffName: "Rashmi"
      },
      {
        staffName: "Karthi"
      },
      {
        staffName: "Varsha"
      }],
      'ece': [{
        staffName: "lekha"
      },
      {
        staffName: "Arthy"
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
      }],
      'agri': [{
        staffName: "Subhulakshmi"
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
      }],
      'auto': [{
        staffName: "Karthickraj"
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
      }],
      'cse': [{
        staffName: "Vishnu"
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
    }

    console.log("it in faculty is", faculty[dept]);
    return faculty[dept];
  }
}
