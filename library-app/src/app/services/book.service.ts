import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IBook,IBooks} from "@interfaces/Book";
import {environment} from "@environments/environment";

import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private _http:HttpClient) { }

    getBookById(bookId: number):Observable<IBook> {
        return this._http.get<IBook>(environment.apiUrl + '/books/'+bookId)
            .pipe(catchError(this.errorHandler));
    }

    getAllBooks():Observable<IBooks> {
        return this._http.get<IBooks>(environment.apiUrl + '/books')
            .pipe(catchError(this.errorHandler));
    }

    getBooksByAuthorId(authorId: number):Observable<IBooks> {
        return this._http.get<IBooks>(environment.apiUrl + '/authors/' + authorId + '/books')
            .pipe(catchError(this.errorHandler));
    }

    addBook(bookData: any){
        console.log(bookData);
        return this._http.post<any>(environment.apiUrl + '/books', bookData)
            .pipe(catchError(this.errorHandler));
    }








    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server error");
    }
}
