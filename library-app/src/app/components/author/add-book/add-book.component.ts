import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "@services/book.service";
import {UserDataService} from "@services/user-data.service";



@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

    addBookForm!    : FormGroup;
    fileToUpload    : string = 'Choose file';
    bookImageFile   : any;
    url             : string | ArrayBuffer | null = '';

    public status      : string = '';
    public message     : string = '';

    constructor(private fb:FormBuilder,
                private _bookService: BookService,
                private _userDataService: UserDataService,
                ) {

    }


    get bookTitle(){
        return this.addBookForm.get('bookTitle');
    }

    get bookImg(){
        return this.addBookForm.get('bookImg');
    }

    ngOnInit(): void {
        this.addBookForm = this.fb.group({
            bookTitle   :   [null,[Validators.required,Validators.minLength(3)]],
            bookImg     :   [null,Validators.required],
            bookDesc    :   [null],
        });
    }

    onSelectFile(event:any) {

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => { // called once readAsDataURL is completed
                // @ts-ignore
                this.url = event?.target?.result;
            };
            this.fileToUpload   = event.target.files[0].name;
            this.bookImageFile           = event.target.files[0];
        }else{
            this.fileToUpload = 'Choose file';
            this.url    = null;
            this.bookImageFile   = null;
        }
    }

    resetForm(){
        this.addBookForm.reset();
        this.url            = null;
        this.fileToUpload   = 'Choose file';
        this.bookImageFile  = null;

        this.status         = '';
        this.message        = '';
    }


    submit(){

        //console.log(this.addBookForm.value);
        //console.log(this.addBookForm.value.bookDesc);
        let userId = this._userDataService.getUserId();

        if (Number.isInteger(Number(userId))) {
            const formData = new FormData();
            formData.append('bookImg', this.bookImageFile, this.bookImageFile.name);
            formData.append('bookTitle', this.addBookForm.value.bookTitle);
            formData.append('bookDesc', this.addBookForm.value.bookDesc);
            formData.append('userId', userId);


            // @ts-ignore
            /*for (let [key, value] of formData) {
                console.log(`${key}: ${value}`)
            }*/

            this._bookService.addBook(formData)
                .subscribe(
                    (response: any) => {
                        //console.log("Success",response);

                        if(response.status === 'success'){
                            this.resetForm();
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
            this.message       = 'Cant Identify your user Id';
            this.status         = 'error';
        }

    }

}













