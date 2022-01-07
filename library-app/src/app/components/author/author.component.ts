import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes, ParamMap} from '@angular/router';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss']
})


export class AuthorComponent implements OnInit {
    public authorId: number | undefined;

    constructor() { }

    ngOnInit(): void {

    }



}





