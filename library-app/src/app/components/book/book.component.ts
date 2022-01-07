import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from "@services/book.service";


@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    public bookId: number | undefined;

    public title       : string | undefined;
    public description : string | undefined;
    public image       : string | undefined;
    public author      : string | undefined;
    public posted      : string | undefined;

    public status      : string | undefined;
    public message     : string | undefined;

    constructor(private route: ActivatedRoute,
                private _bookService: BookService) {
    }

    ngOnInit(): void {

        this.route.paramMap.subscribe((params:ParamMap) => {

            let book_id = parseInt(<string>params.get('id'));

            if (Number.isInteger(Number(book_id))) {
                this.bookId = book_id;
                this._bookService.getBookById(this.bookId)
                    .subscribe((response: any) => {
                            //console.log(response);
                            //console.log(response.message);
                            if(response.status === 'success'){
                                this.bookId      = response.data.id;
                                this.title       = response.data.title;
                                this.description = response.data.description;
                                this.image       = response.data.image;
                                this.author      = response.data.author;
                                this.posted      = response.data.posted;
                            }
                            this.status      = response.status;
                            this.message     = response.message;

                        },
                        (error: any) => {
                            //console.log("Error",error);
                            this.message = error;
                            this.status   = 'error';
                        },
                    );
            }else{
                this.message       = 'Invalid book Id';
                this.status         = 'error';
            }

        });

    }

}
