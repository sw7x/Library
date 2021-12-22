import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes, ParamMap} from '@angular/router';



@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss']
})




export class AuthorComponent implements OnInit {
    public authorId: number | undefined;
    profile_btn_status  : boolean = true;
    book_btn_status     : boolean = false;
    add_book_btn_status : boolean = false;


    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params:ParamMap) => {
            this.authorId = parseInt(<string>params.get('id'));
        });
    }

    showMyBooks(){
        this.router.navigate(['my-book-list'],{relativeTo:this.route});
        this.profile_btn_status = false;
        this.book_btn_status    = true;
        this.add_book_btn_status = false;
        //alert('showMyBooks');
    }
    showAddBook(){
        this.router.navigate(['add-book'],{relativeTo:this.route});
        //alert('showAddBook');
        this.profile_btn_status = false;
        this.book_btn_status    = false;
        this.add_book_btn_status = true;
    }
    showMyProfile(){

        this.router.navigate(['view-profile'],{relativeTo:this.route});
        //alert('showMyProfile');
        this.profile_btn_status = true;
        this.book_btn_status    = false;
        this.add_book_btn_status = false;
    }

}





