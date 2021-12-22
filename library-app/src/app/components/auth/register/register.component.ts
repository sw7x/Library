import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ConfirmedValidator } from './confirmed.validator';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    showPw: boolean = false;
    showConfirmPw: boolean = false;

    regForm! : FormGroup;

    constructor(private fb:FormBuilder) { }




    ngOnInit(): void {
        this.regForm = this.fb.group({

            full_name   :   [null,[Validators.required,Validators.minLength(3)]],
            email       :   [null,[Validators.required,Validators.email]],
            password    :   [null,[
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12),
                ]
            ],
            confirm_password: [null,[
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12),
                ]
            ],
            phone   :[null]
        }, {
            validator: ConfirmedValidator('password', 'confirm_password')
        });
    }


    get full_name(){
        return this.regForm.get('full_name');
    }
    get email(){
        return this.regForm.get('email');
    }
    get password(){
        return this.regForm.get('password');
    }
    get confirm_password(){
        return this.regForm.get('confirm_password');
    }


    togglePassword(){
        this.showPw = !this.showPw;
    }

    toggleConfirmPassword(){
        this.showConfirmPw = !this.showConfirmPw;
    }

    submitRegForm(){

    }

    resetForm(event:any){
        this.regForm.reset();
    }

}
