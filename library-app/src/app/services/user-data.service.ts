import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";


@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    constructor() { }

    handle(userData:object) {
        this.setUserData(userData);
    }

    getUserData() {
        return localStorage.getItem('userData');
    }

    setUserData(userData:object) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    remove() {
        localStorage.removeItem('userData');
    }

    getUserRole(){
        let UserData = JSON.parse(<string>this.getUserData());
        return UserData?.role;
    }

    getUserEmail() {
        let UserData = JSON.parse(<string>this.getUserData());
        return UserData?.email;
    }

    getUserId() {
        let UserData = JSON.parse(<string>this.getUserData());
        return UserData?.id;
    }


}
