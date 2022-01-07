import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@services/auth.service";
import {TokenService} from "@services/token.service";
import {Router} from "@angular/router";
import {UserDataService} from "@services/user-data.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    show: boolean = false;
    loginForm! : FormGroup;

    public form = {
        email: null,
        password: null
    };


    public status      : string = '';
    public message     : string = '';


    constructor(private fb:FormBuilder,
                private auth:AuthService,
                private _tokenService: TokenService,
                private _userDataService: UserDataService,
                private _router: Router
                ) {

    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [null,[Validators.required,Validators.email]],
            password: [null,[
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12),
                ]
            ],
        });
    }

    get email(){
        return this.loginForm.get('email');
    }

    get password(){
        return this.loginForm.get('password');
    }


    togglePassword(){
        this.show = !this.show;
    }



    submitLoginForm(){
        if(this.loginForm.valid){
            this.auth.login(this.loginForm.value)
            .subscribe(
                (response: any) => {
                    if(response.status == 'success'){

                        this._tokenService.handle(response.access_token);
                        this._userDataService.handle(response.userData);

                        let userRole = this._userDataService.getUserRole();
                        //console.log(this._userDataService.getUserRole());

                        if(userRole == 'teacher'){
                            this._router.navigateByUrl('/author/my-profile');
                        }else if(userRole == 'admin'){
                            this._router.navigateByUrl('/admin/my-profile');
                        }else{
                            this._router.navigateByUrl('/search');
                        }

                        this.auth.changeAuthStatus(true,response.userData.role,response.userData.email);
                    }

                    this.status      = response.status;
                    this.message     = response.message;
                    //console.log("Success",response)
                },
                (error: any) => {
                    //console.log("Error",error);
                    this.message = error;
                    this.status   = 'error';
                },
            );

        }
    }

    resetForm(event:any){
        this.loginForm.reset();
    }



}
