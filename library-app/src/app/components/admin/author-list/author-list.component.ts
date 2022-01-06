import { Component, OnInit } from '@angular/core';
import {BookService} from "@services/book.service";
import {AuthorService} from "@services/author.service";
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
    //public authors:Array<any> | undefined;
    public authors: any[] = [];
    public totalRecords:number | undefined;
    public page:number = 1;



    public status      : string | undefined;
    public message     : string | undefined;
    public errorMsg    : string | undefined;




    constructor(private _authorService: AuthorService,private toastr: ToastrService) { }


    changeStatus(event: any, authorId: any){
        console.log(authorId);
        console.log(event);
        //this.toastr.info('Hello world!', 'Toastr fun!');
        //this.toastr.success('Hello world!');


        let statVal = (event==true)?'1':'0';

        this._authorService.changeAuthorStatus(authorId,statVal)
        .subscribe(
            (response: any) => {
                if(response.status == 'success'){
                    this.toastr.success(response.message);
                }else{
                    this.toastr.error(response.message);
                }
                //console.log("Success",response);
            },
            (error: any) => {
                this.toastr.error(error);
                console.log("Error",error);
                //this.errorMsg = error
            },
        );
    }



    ngOnInit(): void {




        this._authorService.getAllAuthors()
            .subscribe((response: any) => {
                    console.log(response);
                    console.log(response.message);
                    console.log(response.data);




                    if(response.status === 'success'){
                        this.authors      = response.data;
                        this.totalRecords = response.data.length;



                    }else{

                    }


                    this.status      = response.status;
                    this.message     = response.message;







                },
                error => this.errorMsg = error
            );
    }

}
