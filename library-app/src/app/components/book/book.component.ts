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

    public errorMsg    : string | undefined;


    // public bookData = {
    //     id       : this.number,
    //     title       : string,
    //     description : string,
    //     image       : string,
    //     author      : string,
    //     posted     : string
    // };


    constructor(private route: ActivatedRoute, private _bookService: BookService) {

    }

    ngOnInit(): void {

        this.route.paramMap.subscribe((params:ParamMap) => {
            this.bookId = parseInt(<string>params.get('id'));
            //alert(this.bookId);

            //if bookId nan throw error


            this._bookService.getBookById(this.bookId)
                .subscribe((response: any) => {
                    console.log(response);
                    console.log(response.message);





                    if(response.status === 'success'){
                        this.bookId      = response.data.id;
                        this.title       = response.data.title;
                        this.description = response.data.description;
                        this.image       = response.data.image;
                        this.author      = response.data.author;
                        this.posted      = response.data.posted;


                    }else{

                    }


                    this.status      = response.status;
                    this.message     = response.message;







                },
                error => this.errorMsg = error
                );



        });

    }

}
