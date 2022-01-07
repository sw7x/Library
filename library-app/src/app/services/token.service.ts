import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor() { }

    private iss = {
       login   : environment.apiUrl + '/login',
        //reg  :  environment.apiUrl + '/register',
    };

    handle(token: string) {
        this.setToken(token);        
        //console.log(this.payload(token));
        //console.log(userData);
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    remove() {
        localStorage.removeItem('token');        
    }

    loggedIn() {
        const token = this.getToken();
        if (token) {
            const payload = this.payload(token);
            //check if payload iss url equals to /login or /register
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
  
}
