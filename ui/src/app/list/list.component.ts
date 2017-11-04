import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    private championMap: Map<string, string[]> = new Map<string, string[]>();

    constructor(private listService: ListService) {
    }

    ngOnInit() {
        this.buildChampionMap(this.listService.getChampionList());
    }

    private buildChampionMap(championList: string[]) {
        championList.sort();
        for (const champion of championList) {
            const firstLetter = champion.substring(0, 1);
            const mapEntry = this.championMap.get(firstLetter);
            if (mapEntry) {
                mapEntry.push(champion);
            } else {
                this.championMap.set(firstLetter, [champion]);
                this.championMap.entries();
            }
        }
    }

}
