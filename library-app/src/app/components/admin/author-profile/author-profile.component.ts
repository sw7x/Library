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

    public status      : string ='';
    public message     : string ='';


    constructor(private route: ActivatedRoute,
                private router: Router,
                private _authorInfoService:AuthorService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params:ParamMap) => {
            let  user_id = parseInt(<string>params.get('id'));

            if (Number.isInteger(Number(user_id))) {
                this.authorId = user_id;
                this._authorInfoService.getAuthorById(this.authorId)
                    .subscribe((response: any) => {
                            //console.log(response);
                            //console.log(response.message);
                            if(response.status === 'success'){
                                this.authorId       = response.data.id;
                                this.name           = response.data.name;
                                this.email          = response.data.email;
                                this.phone          = response.data.phone;
                                this.registered     = response.data.registered;
                            }

                            this.status      = response.status;
                            this.message     = response.message;
                        },
                        (error: any) => {
                            //console.log("Error",error);
                            this.message = error;
                            this.status   = 'error';
                        }
                    );
            }else{
                this.message       = 'Cant Identify user Id';
                this.status         = 'error';
            }

        });


    }

}














