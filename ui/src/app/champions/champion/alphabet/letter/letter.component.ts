import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrls: [ './letter.component.less' ]
})
export class LetterComponent implements OnInit {
    @Input() letter: string;
    @Input() champions: string[];
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
