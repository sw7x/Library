import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {AuthService} from "@services/auth.service";
import {TokenService} from "@services/token.service";
import {UserDataService} from "@services/user-data.service";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {

    public loggedIn: boolean | undefined;
    public userRole: string = '';
    public userEmail: string = '';



    constructor(
        private _auth: AuthService,
        private router: Router,
        private _tokenService: TokenService,
        private _userDataService: UserDataService
    ) { }

    ngOnInit() {
        this._auth.authStatus.subscribe(value => this.loggedIn = value);
        this._auth.authUserRole.subscribe(value => this.userRole = value);
        this._auth.authEmail.subscribe(value => this.userEmail = value);

        this.userRole = this._userDataService.getUserRole() ?? '';
        //console.log(this.userRole);
    }

    logout(event: MouseEvent) {
        event.preventDefault();
        this._tokenService.remove();
        this._userDataService.remove();
        this._auth.changeAuthStatus(false,'','');
        this.router.navigateByUrl('/login');
    }

}