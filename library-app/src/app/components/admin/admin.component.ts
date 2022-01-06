import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes, ParamMap} from '@angular/router';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    authors_btn_status  : boolean = false;
    books_btn_status    : boolean = false;
    profile_btn_status  : boolean = true;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    }



    showMyProfile(){
        this.router.navigate(['/my-profile'],{relativeTo:this.route});
        this.authors_btn_status = false;
        this.books_btn_status   = false;
        this.profile_btn_status = true;
    }

    showBooks(){
        this.router.navigate(['/books'],{relativeTo:this.route});
        this.authors_btn_status = false;
        this.books_btn_status    = true;
        this.profile_btn_status = false;
    }

    showAuthors(){
        this.router.navigate(['/authors'],{relativeTo:this.route});
        this.authors_btn_status = true;
        this.books_btn_status    = false;
        this.profile_btn_status = false;
    }


}




