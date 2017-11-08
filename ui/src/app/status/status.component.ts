import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';

@Component({
    templateUrl: './status.component.html',
    styleUrls: [ './status.component.less' ]
})
export class StatusComponent implements OnInit {
    championsStatus: string;

    constructor(private statusService: StatusService) {
    }

    ngOnInit() {
        this.statusService.getChampionList()
            .subscribe(result => this.championsStatus = result.join(', '), error => this.championsStatus = error);
    }

}
