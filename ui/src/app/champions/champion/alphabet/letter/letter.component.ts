import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrls: [ './letter.component.css' ]
})
export class LetterComponent implements OnInit {
    menuVisible = false;

    constructor() {
    }

    ngOnInit() {
    }

    onMouseEnter() {
        this.menuVisible = true;
    }

    onMouseLeave() {
        this.menuVisible = false;
    }

}
