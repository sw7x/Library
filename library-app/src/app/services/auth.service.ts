import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "@environments/environment";


import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {TokenService} from "@services/token.service";
import {UserDataService} from "@services/user-data.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private loggedIn            = new BehaviorSubject<boolean>(this._tokenService.loggedIn());
    private loggedInUserRole    = new BehaviorSubject<string>(this._userDataService.getUserRole());
    private loggedInUserEmail   = new BehaviorSubject<string>(this._userDataService.getUserEmail());

    authStatus      = this.loggedIn.asObservable();
    authUserRole    = this.loggedInUserRole.asObservable();
    authEmail       = this.loggedInUserEmail.asObservable();


    changeAuthStatus(value: boolean,role: string,email: string) {
        this.loggedIn.next(value);
        this.loggedInUserRole.next(role);
        this.loggedInUserEmail.next(email);

    }

    constructor(private _http:HttpClient,
                private _tokenService: TokenService,
                private _userDataService: UserDataService){

    }

    login(loginData:any):Observable<any>{
        return this._http.post<any>(environment.apiUrl + '/login', loginData)
            .pipe(catchError(this.errorHandler));
    }


    errorHandler(error: HttpErrorResponse) {
        return throwError(error.error.message || "Server error");
        //return throwError("Server error");
    }


}
