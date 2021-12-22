import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthorProfileComponent } from './components/author/author-profile/author-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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


	],
	imports: [
		BrowserModule,
		AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
