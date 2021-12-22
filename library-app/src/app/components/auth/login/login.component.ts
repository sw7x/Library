import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    show: boolean = false;
    loginForm! : FormGroup;

    constructor(private fb:FormBuilder) { }

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

    }

    resetForm(event:any){
        this.loginForm.reset();
    }



}
