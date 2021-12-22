import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    public bookId: number | undefined;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.route.paramMap.subscribe((params:ParamMap) => {
            this.bookId = parseInt(<string>params.get('id'));
        });

    }

}
