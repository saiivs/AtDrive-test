import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  apiUrl:string = 'https://jsonplaceholder.typicode.com/users';

// Task 5: Error handling using the rxjs operator catchError
  errorHandler = (error:HttpErrorResponse) =>{
    let errMsg;
    switch (error.status){
      case 400 : errMsg = 'Page not found'
      break;
      case 401:  errMsg = 'Unauthorized';
        break;
      case 403:  errMsg = 'Forbidden';
        break;
      case 404:  errMsg = 'Not Found';
        break;
      case 500:  errMsg = 'Internal Server Error';
        break;
      default:   errMsg = 'An error occurred! Please try again later';
    }
    this.router.navigate(['/error'],{queryParams:{errMsg,statusCode:error.status}});
    return throwError(error.message || 'server error')
  }

  getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.apiUrl).pipe(catchError(this.errorHandler))
  }
}
