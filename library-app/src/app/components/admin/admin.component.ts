import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes, ParamMap} from '@angular/router';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    authors_btn_status  : boolean = true;
    books_btn_status     : boolean = false;


    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    }


    showBooks(){
        this.router.navigate(['books'],{relativeTo:this.route});
        this.authors_btn_status = false;
        this.books_btn_status    = true;
    }




    showAuthors(){
        this.router.navigate(['authors'],{relativeTo:this.route});
        this.authors_btn_status = true;
        this.books_btn_status    = false;
    }


}




