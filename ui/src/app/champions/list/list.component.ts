import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    private championEntries;

    constructor(private listService: ListService) {
    }

    ngOnInit() {
        this.buildChampionMap(this.listService.getChampionList());
    }

    private buildChampionMap(championList: string[]) {
        championList.sort();
        const map = new Map();
        for (const champion of championList) {
            const letter = champion.substring(0, 1);
            if (map.has(letter)) {
                map.get(letter).push(champion);
            } else {
                map.set(letter, [champion]);
            }
        }
        this.championEntries = map.entries();
    }

}
