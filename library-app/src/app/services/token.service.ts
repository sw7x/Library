import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {IAuthor} from "@interfaces/Author";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor() { }




    private iss = {
        //login0  : 'http://localhost:8000/api/login',
        login   : environment.apiUrl + '/login',
        //signup  : 'http://localhost:8000/api/signup'
        reg  :  environment.apiUrl + '/register',
    };



    handle(token: string,userData:object) {
        this.set(token,userData);
        //console.log(this.payload(token));
        //console.log(userData);
    }

    set(token: string,userData:object) {
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    get() {
        return localStorage.getItem('token');
    }

    remove() {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }

    isValid() {
        const token = this.get();
        if (token) {
            const payload = this.payload(token);
            //check if payload iss url equals to /login or /register
            //todo ???
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    }

    payload(token: string) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode(payload: string) {
        return JSON.parse(atob(payload));
    }

    loggedIn() {
        return this.isValid();
    }

    getUserRole(){

        let UserData = JSON.parse(<string>localStorage.getItem('userData'));
        //console.log(UserData?.role);
        //console.log("====UserData");
        return UserData?.role;
    }





}
