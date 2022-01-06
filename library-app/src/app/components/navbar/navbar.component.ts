import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {AuthService} from "@services/auth.service";
import {TokenService} from "@services/token.service";
//import { TokenService } from '../../services/token.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {

    public loggedIn: boolean | undefined;
    public userRole: string = '';




    constructor(
        private _auth: AuthService,
        private router: Router,
        private _tokenService: TokenService
    ) { }

    ngOnInit() {
        this._auth.authStatus.subscribe(value => this.loggedIn = value);
        this._auth.authUserRole.subscribe(value => this.userRole = value);


        let UserData = JSON.parse(<string>localStorage.getItem('userData'));
        console.log(UserData?.role);
        console.log("====UserData");

        this.userRole = UserData?.role ?? '';



    }

    logout(event: MouseEvent) {
        event.preventDefault();
        this._tokenService.remove();
        this._auth.changeAuthStatus(false,'');
        this.router.navigateByUrl('/login');
    }

}