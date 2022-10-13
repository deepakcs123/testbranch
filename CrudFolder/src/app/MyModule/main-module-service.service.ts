import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainModuleServiceService {
  apiUrl: string = 'http://localhost:8090/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpData:HttpClient) {   }

  getRecords():Observable<any>
  {
    console.log( 
      this.httpData.get(this.apiUrl+"/employee/1"));
    return this.httpData.get(this.apiUrl+"/employee")
  }

  deleteRecord(id:any): Observable<any>{
   return this.httpData.delete(this.apiUrl+"/employee/"+id)
  }
  saveRecord(data: any): Observable<any> {
       return this.httpData.post(this.apiUrl+"/employee", data).pipe(catchError(this.error));
  }

  updateRecord(id: any, data: any): Observable<any> {
    return this.httpData
      .put(this.apiUrl+"/employee/"+id, data, { headers: this.headers })
      .pipe(catchError(this.error));
  }

   // Handle Errors
   error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  
}
