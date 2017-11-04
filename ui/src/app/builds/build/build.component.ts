import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildService } from './build.service';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './build.component.html',
    styleUrls: [ './build.component.css' ]
})
export class BuildComponent implements OnInit {
    championName: string;

    constructor(private route: ActivatedRoute, private buildService: BuildService) {
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
