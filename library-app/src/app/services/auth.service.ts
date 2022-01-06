import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "@environments/environment";

import {IBook} from "@interfaces/Book";



import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {TokenService} from "@services/token.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private loggedIn            = new BehaviorSubject<boolean>(this._tokenService.loggedIn());
    private loggedInUserRole    = new BehaviorSubject<string>(this._tokenService.getUserRole());

    authStatus      = this.loggedIn.asObservable();
    authUserRole    = this.loggedInUserRole.asObservable();




    changeAuthStatus(value: boolean,role: string) {
        this.loggedIn.next(value);
        this.loggedInUserRole.next(role);
    }




    constructor(private _http:HttpClient, private _tokenService: TokenService){

    }

    login(loginData:any):Observable<any>{
        return this._http.post<any>(environment.apiUrl + '/login', loginData)
            .pipe(catchError(this.errorHandler));
    }


    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server error");
    }




}
