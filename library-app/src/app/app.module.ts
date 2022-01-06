import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from '@components/author/author.component';
import { AdminComponent } from '@components/admin/admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BookService} from "@services/book.service";



import { HttpClientModule } from '@angular/common/http';



import { MyProfileComponent } from '@components/author/my-profile/my-profile.component';
import { AuthorProfileComponent } from '@components/admin/author-profile/author-profile.component';
import {RegistrationService} from "@services/registration.service";

import {NgxPaginationModule} from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthorService} from "@services/author.service";
import {AuthService} from "@services/auth.service";
import {SearchService} from "@services/search.service";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';


@NgModule({
	declarations: [
		AppComponent,
        // SearchComponent,
        // LoginComponent,
        //RegisterComponent,
        // AddBookComponent,
        // BookListComponent,
        // AuthorBookListComponent,
        // AuthorListComponent,


        routingComponents,
        AuthorComponent,
        AdminComponent,
        AuthorProfileComponent,
        MyProfileComponent,
        NavbarComponent,
        AdminProfileComponent,


	],
	imports: [
		BrowserModule,
		AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        UiSwitchModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            closeButton:true,
            timeOut: 1200,
        }),
	],
	providers: [
	    BookService,
        AuthorService,
        RegistrationService,
        AuthService,
        SearchService

    ],
	bootstrap: [AppComponent]
})
export class AppModule { }
