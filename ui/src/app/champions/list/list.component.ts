import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion/champion.service';
import { buildChampionAlphabet } from './list.util';

@Component({
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.less' ]
})
export class ListComponent implements OnInit {
    private championEntries: Array<any>;

    constructor(private championService: ChampionService) {
    }

    ngOnInit() {
        this.championService.getChampionList()
            .subscribe(championList => {
                this.championEntries = buildChampionAlphabet(championList);
            });
    }

}
