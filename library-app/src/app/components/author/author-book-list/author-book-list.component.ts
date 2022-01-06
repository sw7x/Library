import { Component, OnInit } from '@angular/core';
import {BookService} from "@services/book.service";

@Component({
    selector: 'app-author-book-list',
    templateUrl: './author-book-list.component.html',
    styleUrls: ['./author-book-list.component.scss']
})
export class AuthorBookListComponent implements OnInit {
    public books: any[] = [];
    public totalRecords:number | undefined;
    public page:number = 1;

    public status      : string | undefined;
    public message     : string | undefined;
    public errorMsg    : string | undefined;

    constructor(private _bookService: BookService) { }

    ngOnInit(): void {

        //todo get userid
        this._bookService.getBooksByAuthorId(7)
            .subscribe((response: any) => {
                    console.log(response);
                    console.log(response.message);
                    console.log(response.data);




                    if(response.status === 'success'){
                        this.books           = response.data;
                        this.totalRecords    = response.data.length;


                    }else{

                    }


                    this.status      = response.status;
                    this.message     = response.message;







                },
                error => this.errorMsg = error
            );

    }

}
