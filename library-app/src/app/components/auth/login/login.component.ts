import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@services/auth.service";
import {TokenService} from "@services/token.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    show: boolean = false;
    loginForm! : FormGroup;
    public errorMsg    : string | undefined;
    public form = {
        email: null,
        password: null
    };

    constructor(private fb:FormBuilder,
                private auth:AuthService,
                private _tokenService: TokenService,
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

    //this._tokenService.handle(response.access_token)

    submitLoginForm(){
        if(this.loginForm.valid){
            this.auth.login(this.loginForm.value)
            .subscribe(
                (response: any) => {
                    if(response.status == 'success'){
                        alert('success - ' + response.message);

                        this._tokenService.handle(response.access_token,response.userData);
                        let userRole = this._tokenService.getUserRole();
                        console.log(this._tokenService.getUserRole());

                        if(userRole == 'teacher'){
                            this._router.navigateByUrl('/author/my-profile');
                        }else if(userRole == 'admin'){
                            this._router.navigateByUrl('/admin/my-profile');
                        }else{
                            this._router.navigateByUrl('/search');
                        }



                        this._router.navigateByUrl('/author-profile/add-book');
                        this.auth.changeAuthStatus(true,response.userData.role);
                        //this.auth.changeAuthStatus(response.userData);


                    }else{
                        alert('failed - ' + response.message);
                    }

                    console.log("Success",response)
                },
                (error: any) => {
                    console.log("Error",error);
                    alert('failed - ' + error);
                    this.errorMsg = error
                },
            );

        }
    }

    resetForm(event:any){
        this.loginForm.reset();
    }



}
