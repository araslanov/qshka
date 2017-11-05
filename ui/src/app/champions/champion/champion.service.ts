import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChampionService {
    getBuild(championName: string): Observable<string> {
        return Observable.create(championName + '_BUILD');
    }
}
