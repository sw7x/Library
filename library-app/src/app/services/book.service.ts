import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IBook,IBooks} from "@interfaces/Book";
import {environment} from "@environments/environment";

import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import {TokenService} from "@services/token.service";


@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private _http:HttpClient, private _tokenService:TokenService) { }

    getBookById(bookId: number):Observable<IBook> {
        return this._http.get<IBook>(environment.apiUrl + '/books/'+bookId)
            .pipe(catchError(this.errorHandler));
    }

    getAllBooks():Observable<IBooks> {

        let header = {
            headers: new HttpHeaders()
                .set('Authorization',  `Bearer ${this._tokenService.getToken()}`)
        };

        return this._http.get<IBooks>(environment.apiUrl + '/books',header)
            .pipe(catchError(this.errorHandler));
    }

    getBooksByAuthorId(authorId: number):Observable<IBooks> {

        let header = {
            headers: new HttpHeaders()
                .set('Authorization',  `Bearer ${this._tokenService.getToken()}`)
        };

        return this._http.get<IBooks>(environment.apiUrl + '/authors/' + authorId + '/books',header)
            .pipe(catchError(this.errorHandler));

    }

    addBook(bookData: any){
        //console.log(bookData);

        let header = {
            headers: new HttpHeaders()
                .set('Authorization',  `Bearer ${this._tokenService.getToken()}`)
        };
        return this._http.post<any>(environment.apiUrl + '/books', bookData,header)
            .pipe(catchError(this.addBook_errorHandler));
    }

    addBook_errorHandler(error: HttpErrorResponse) {
        return throwError(error.error.message || "Server error");
        //return throwError("Upload failed due to server error");
    }


    errorHandler(error: HttpErrorResponse) {
        //return throwError("Server error");
        return throwError(error.error.message || "Server error");
    }
}
