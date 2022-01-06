import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IBooks} from "@interfaces/Book";
import {environment} from "@environments/environment";
import {catchError} from "rxjs/operators";
import {SearchService} from "@services/search.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public show: boolean = false;
    searchForm! : FormGroup;
    public errorMsg    : string | undefined;
    public search_type_select:string = "title";
    public formSubmitAttempt: boolean = false;
    public formShowErrors: boolean = false;
    public books:Array<any> | undefined;




    constructor(private fb:FormBuilder,private _searchService: SearchService) { }

    ngOnInit(): void {
        this.searchForm = this.fb.group({
            search_text: [null,[Validators.required,Validators.minLength(2)]],
            search_type: [null,[Validators.required]]
        });
    }

    get search_text(){
        return this.searchForm.get('search_text');
    }

    /*isFieldValid(field: string) {
        return (
            this.testForm.get(field).errors && this.testForm.get(field).touched ||
            this.testForm.get(field).untouched && this.formSubmitted && this.testForm.get(field).errors
        );
    }*/

    onBlur(){
        this.formSubmitAttempt = false;
        this.formShowErrors = false;
    }

    onFocus(){
        this.formSubmitAttempt = false;
        this.formShowErrors = true;
    }

    submitSearchForm(){
        this.formSubmitAttempt = true;
        this.formShowErrors = true;
        //this.searchForm.controls['search_text'].markAsTouched();

        console.log(this.searchForm.value);


        if(this.searchForm.valid){
            console.log("valid");
            let search_text     = this.searchForm.value.search_text;
            let search_type    = this.searchForm.value.search_type;






            this._searchService.getBooksByparam(search_type,search_text)
                .subscribe(
                    (response: any) => {
                        if(response.status == 'success'){
                            //alert('success - ' + response.message);

                            this.books = response.data;


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











/*
            this.auth.login(this.loginForm.value)
                .subscribe(
                    (response: any) => {
                        if(response.status == 'success'){
                            alert('success - ' + response.message);
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
*/
        }
    }

}
