import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IAuthors,IAuthor} from "@interfaces/Author";
import {environment} from "@environments/environment";

import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import {TokenService} from "@services/token.service";



@Injectable({
    providedIn: 'root'
})
export class AuthorService {


    constructor(private _http:HttpClient,private _tokenService: TokenService) { }


    getAuthorById(authorId: number):Observable<IAuthor> {
        return this._http.get<IAuthor>(environment.apiUrl + '/authors/'+authorId)
            .pipe(catchError(this.errorHandler));

    }


    getAllAuthors():Observable<IAuthors> {

        let header = {
            headers: new HttpHeaders()
                .set('Authorization',  `Bearer ${this._tokenService.getToken()}`)
        };

        return this._http.get<IAuthors>(environment.apiUrl + '/authors',header)
            .pipe(catchError(this.errorHandler));
    }


    changeAuthorStatus(authorId:number,statVal:string):Observable<IAuthor> {
        const body = { status: statVal };
        let header = {
            headers: new HttpHeaders()
                .set('Authorization',  `Bearer ${this._tokenService.getToken()}`)
        };

        return this._http.put<any>(environment.apiUrl + '/authors/'+authorId, body,header)
            .pipe(catchError(this.changeAuthorStatus_errorHandler));
    }



    changeAuthorStatus_errorHandler(error: HttpErrorResponse) {
        return throwError(error.error.message || "Server error");
        //return throwError("User updated successfully due to Server error");
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.error.message || "Server error");
    }
}
