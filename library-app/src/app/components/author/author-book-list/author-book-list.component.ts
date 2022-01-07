import { Component, OnInit } from '@angular/core';
import {BookService} from "@services/book.service";
import {TokenService} from "@services/token.service";
import {UserDataService} from "@services/user-data.service";

@Component({
    selector: 'app-author-book-list',
    templateUrl: './author-book-list.component.html',
    styleUrls: ['./author-book-list.component.scss']
})
export class AuthorBookListComponent implements OnInit {
    public books: any[] = [];
    public totalRecords : number = 0;
    public page:number = 1;

    public status      : string ='';
    public message     : string ='';


    constructor(private _bookService: BookService,
                private _tokenService: TokenService,
                private _userDataService: UserDataService,
                ) { }

    ngOnInit(): void {

        let userId = this._userDataService.getUserId();

        if (Number.isInteger(Number(userId))) {
            this._bookService.getBooksByAuthorId(userId)
                .subscribe((response: any) => {

                    if(response.status === 'success'){
                        this.books           = response.data;
                        this.totalRecords    = response.data.length;
                    }

                    this.status      = response.status;
                    this.message     = response.message;
                },
                error => {
                    this.message = error;
                    this.status   = 'error';
                }
            );
        }else{
            this.message = 'Cant Identify user Id';
            this.status   = 'error';
        }

    }

}
