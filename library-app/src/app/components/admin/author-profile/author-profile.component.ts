
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthorService} from "@services/author.service";


@Component({
    selector: 'app-author-profile',
    templateUrl: './author-profile.component.html',
    styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {
    public authorId: number | undefined;

    public name         : string | undefined;
    public email        : string | undefined;
    public phone        : string | undefined;
    public registered   : string | undefined;

    public status      : string | undefined;
    public message     : string | undefined;


    public errorMsg    : string | undefined;






    constructor(private route: ActivatedRoute,
                private router: Router,
                private _authorInfoService:AuthorService) {



    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params:ParamMap) => {
            this.authorId = parseInt(<string>params.get('id'));
            //alert('admin -(author-profile) - ' + this.authorId)


            this._authorInfoService.getAuthorById(this.authorId)
                .subscribe((response: any) => {
                        console.log(response);
                        console.log(response.message);




                        if(response.status === 'success'){
                            this.authorId       = response.data.id;
                            this.name           = response.data.name;
                            this.email          = response.data.email;
                            this.phone          = response.data.phone;
                            this.registered     = response.data.registered;


                        }else{

                        }


                        this.status      = response.status;
                        this.message     = response.message;







                    },
                    error => this.errorMsg = error
                );





        });




        /*this.route.paramMap.subscribe((params:ParamMap) => {
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



        });*/










    }

}














