import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "@services/book.service";



@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
    //imageSrc: string | ArrayBuffer | null | undefined;
    addBookForm! : FormGroup;
    fileToUpload: string = 'Choose file';
    bookImageFile:any;
    url: string | ArrayBuffer | null = '';
    public errorMsg    : string | undefined;


    /*addBookForm = new FormGroup({
        bookTitle: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]),
        //bookImg: new FormControl('', [Validators.required]),
        //fileSource: new FormControl('', [Validators.required])
    });*/



    constructor(private fb:FormBuilder,private _bookService: BookService) {

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
            userId      :   [7,Validators.required]
        });
    }







    onSelectFile(event:any) {
        //console.log(event.target.files);
        //console.log(event.target.files[0]);
        //console.log(event.target.files[0].name);

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

    resetForm(event:any){
        this.addBookForm.reset();
        this.url = null;
        this.fileToUpload = 'Choose file';
        this.bookImageFile   = null;
    }





    /*
       onFileChange(event: { target: { files: string | any[]; }; }) {

            const reader = new FileReader();

            if(event.target.files && event.target.files.length) {
                const [file] = event.target.files;
                reader.readAsDataURL(file);
                reader.onload = () => {

                    this.imageSrc = reader.result as string;
                    this.myForm.patchValue({
                        fileSource: reader.result
                    });
                };
            }
        }


        onFileChange(event:MouseEvent) {
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();

                reader.readAsDataURL(event.target.files[0]); // read file as data url

                reader.onload = (event) => { // called once readAsDataURL is completed
                    // @ts-ignore
                    this.imageSrc = event.target.result;
                }
            }
        }
    */

    submit(){

        console.log(this.addBookForm.value);
        console.log(this.addBookForm.value.bookDesc);

        const formData = new FormData();
        formData.append('bookImg', this.bookImageFile, this.bookImageFile.name);
        formData.append('bookTitle', this.addBookForm.value.bookTitle);
        formData.append('bookDesc', this.addBookForm.value.bookDesc);
        formData.append('userId', this.addBookForm.value.userId);


        console.log(formData);
        // @ts-ignore
        for (let [key, value] of formData) {
            console.log(`${key}: ${value}`)
        }


        this._bookService.addBook(formData)
            .subscribe(
                (response: any) => console.log("Success",response),
                (error: any) => {
                    console.log("Error",error);
                    this.errorMsg = error
                },
            );

    }



}













