import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import {SearchComponent} from "@components/search/search.component";
import {LoginComponent} from "@components/auth/login/login.component";
import { RegisterComponent } from '@components/auth/register/register.component';



import { AddBookComponent } from '@components/author/add-book/add-book.component';
import { AuthorBookListComponent } from '@components/author/author-book-list/author-book-list.component';


import { BookListComponent } from '@components/admin/book-list/book-list.component';
import { AuthorListComponent } from '@components/admin/author-list/author-list.component';


import {BookComponent} from "@components/book/book.component";
import {AuthorComponent} from "@components/author/author.component";
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import {AuthorProfileComponent} from "@components/admin/author-profile/author-profile.component";
import {AdminComponent} from "@components/admin/admin.component";
import {MyProfileComponent} from "@components/author/my-profile/my-profile.component";
import {AdminProfileComponent} from "@components/admin/admin-profile/admin-profile.component";


const routes: Routes = [
    {path:'',redirectTo: 'search',pathMatch:'full'},
    {path:'search',component: SearchComponent},
    {path:'login',component: LoginComponent},



    {path:'register',component: RegisterComponent},
    {path:'books/:id',component: BookComponent},

    {
        path:'authors/:id',
        component: AuthorProfileComponent,
        // children: [
        //     {path:'my-book-list',component: AuthorBookListComponent},
        //     {path:'add-book',component: AddBookComponent},
        // ]
    },

    {
        path:'author',
        component: AuthorComponent,
        children: [
            {path:'my-books',component: AuthorBookListComponent},
            {path:'add-book',component: AddBookComponent},
            {path:'my-profile',component: MyProfileComponent},
            {path:'',redirectTo: 'my-profile',pathMatch:'full'},
        ]
    },

    {
        path:'admin',
        component: AdminComponent,
        children: [
            {path:'authors',component: AuthorListComponent},
            {path:'books',component: BookListComponent},
            {path:'my-profile',component: AdminProfileComponent},
            {path:'',redirectTo: 'my-profile',pathMatch:'full'},
        ]
    },


    {path: '**', component: PageNotFoundComponent},


    /*{path:'author',component: AuthorComponent},//author/my-book-list
    {path:'author',component: AuthorComponent},//author/add-book


    {path:'Admin',component: AuthorComponent}, //admin/book-list
    {path:'author',component: AuthorComponent}, //admin/authors-list*/




];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    SearchComponent,
    LoginComponent,

    RegisterComponent,
    BookComponent,
    AuthorBookListComponent,
    AddBookComponent,
    AuthorComponent,
    AuthorProfileComponent,
    PageNotFoundComponent,

    AdminComponent,
    AuthorListComponent,
    BookListComponent

];
