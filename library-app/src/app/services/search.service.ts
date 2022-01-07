import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IBooks} from "@interfaces/Book";
import {environment} from "@environments/environment";

import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http:HttpClient) { }

    getBooksByparam(type: string, searchText: string):Observable<IBooks>{
        return this.http.get<IBooks>(environment.apiUrl + '/books?' + type + '=' + searchText)
            .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error || "Server error");
    }
}
