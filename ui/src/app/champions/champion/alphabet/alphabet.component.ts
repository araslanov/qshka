import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion.service';

@Component({
    selector: 'app-alphabet',
    templateUrl: './alphabet.component.html',
    styleUrls: [ './alphabet.component.css' ]
})
export class AlphabetComponent implements OnInit {
    private championEntries: Array<any>;

    constructor(private championService: ChampionService) {
    }

    ngOnInit() {
        this.championEntries = this.championService.getChampionEntries();
        console.log('2');
    }

}
