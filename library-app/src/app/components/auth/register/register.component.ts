import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ConfirmedValidator } from './confirmed.validator';
import {RegistrationService} from "@services/registration.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public showPw           : boolean = false;
    public showConfirmPw    : boolean = false;
    public regForm!         : FormGroup;


    constructor(private fb:FormBuilder, private _registrationService:RegistrationService ) {

    }


    public status      : string = '';
    public message     : string = '';



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
        //console.log(this.regForm.value);
        //console.log(this.regForm.value.email);

        /* populate FormData from values from form*/
        const formData = new FormData();
        Object.entries(this.regForm.value).forEach(
            ([key, value]: any[]) => {
                formData.set(key, value);
            }
        );

        /* to view FormData -debug purpose */
        // @ts-ignore
        /*for (let [key, value] of formData) {
            console.log(`${key}: ${value}`)
        }*/

        this._registrationService.addUser(formData)
            .subscribe(
                (response: any) => {
                    //console.log("Success",response)
                    this.status      = response.status;
                    this.message     = response.message;
                    this.resetForm();
                },
                (error: any) => {
                    //console.log("Error",error);
                    this.message = error;
                    this.status   = 'error';
                },
            );
    }

    resetForm(){
        this.regForm.reset();
    }

}
