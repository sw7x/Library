import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {
    public authorId: number | undefined;
    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params:ParamMap) => {
            this.authorId = parseInt(<string>params.get('id'));
        });
    }

}









