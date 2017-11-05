import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion/champion.service';

@Component({
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit {
    private championEntries: Array<any>;

    constructor(private championService: ChampionService) {
    }

    ngOnInit() {
        this.championEntries = this.championService.getChampionEntries();
    }

}
