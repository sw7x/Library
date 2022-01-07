import { Component, OnInit } from '@angular/core';
import {AuthorService} from "@services/author.service";
import {UserDataService} from "@services/user-data.service";


@Component({
    selector: 'app-author-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})



export class MyProfileComponent implements OnInit {
    public authorId: number | undefined;

    public name         : string | undefined;
    public email        : string | undefined;
    public phone        : string | undefined;
    public registered   : string | undefined;

    public status      : string = '';
    public message     : string = '';



    constructor(private _authorService:AuthorService,
                private _userDataService: UserDataService,) {
    }

    ngOnInit(): void {

        let userId = this._userDataService.getUserId();

        if (Number.isInteger(Number(userId))) {
            this._authorService.getAuthorById(userId)
                .subscribe((response: any) => {

                        if(response.status === 'success'){
                            this.name       = response.data.name;
                            this.email      = response.data.email;
                            this.phone      = response.data.phone;
                            this.registered = response.data.registered;
                            this.authorId   = response.data.id;
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
            this.message       = 'Cant Identify user Id';
            this.status        = 'error';
        }

    }
}














