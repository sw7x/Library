
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IAuthors,IAuthor} from "@interfaces/Author";
import {environment} from "@environments/environment";

import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    constructor(private _http:HttpClient) { }


    getAuthorById(authorId: number):Observable<IAuthor> {
        return this._http.get<IAuthor>(environment.apiUrl + '/authors/'+authorId)
            .pipe(catchError(this.errorHandler));

    }


    getAllAuthors():Observable<IAuthors> {
        return this._http.get<IAuthors>(environment.apiUrl + '/authors')
            .pipe(catchError(this.errorHandler));
    }


    changeAuthorStatus(authorId:number,statVal:string):Observable<IAuthor> {
        const body = { status: statVal };
        return this._http.put<any>(environment.apiUrl + '/authors/'+authorId, body)
            .pipe(catchError(this.errorHandlerChangeAuthorStatus));
    }



    errorHandlerChangeAuthorStatus(error: HttpErrorResponse) {
        console.log(error.error.message);
        return throwError(error.error.message);
        //return throwError("User updated successfully due to Server error");
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server error");
    }
}
