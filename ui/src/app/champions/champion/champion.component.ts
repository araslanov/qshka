import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from './champion.service';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './champion.component.html',
    styleUrls: [ './champion.component.css' ]
})
export class ChampionComponent implements OnInit {
    championName: string;

    constructor(private route: ActivatedRoute, private championService: ChampionService) {
    }

    ngOnInit() {
        // this.hero$ = this.route.paramMap
        //     .switchMap((params: ParamMap) =>
        //         this.service.getHero(params.get('id')));
        this.route.params.subscribe(params => {
            this.championName = params[ 'id' ];
        });
    }

}
