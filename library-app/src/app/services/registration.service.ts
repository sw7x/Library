import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";

import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import {IBook} from "@interfaces/Book";


@Injectable({
    providedIn: 'root'
})
export class RegistrationService {


    constructor(private _http:HttpClient) { }



    addUser(userData: FormData) {
        console.log(userData);
        return this._http.post<any>(environment.apiUrl + '/authors', userData)
            .pipe(catchError(this.errorHandler));
    }


    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server error");
    }


}
