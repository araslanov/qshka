import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChampionService implements OnInit {
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('https://euw1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=true')
            .subscribe(data => {
                    console.log(data);
                }
            );
    }

    getChampionList(): Observable<any> {
        return this.http.get('http://localhost:8080/api/champions');
    }
}
