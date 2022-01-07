import { Component, OnInit } from '@angular/core';
import {BookService} from "@services/book.service";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    public books: any[] = [];
    public totalRecords:number = 0;
    public page:number = 1;

    public status      : string | undefined;
    public message     : string | undefined;




    constructor(private _bookService: BookService) { }

    ngOnInit(): void {

        this._bookService.getAllBooks()
            .subscribe((response: any) => {
                    //console.log(response);
                    //console.log(response.message);
                    //console.log(response.data);

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




    }

}
