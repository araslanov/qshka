import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BuildService {
    getBuild(championName: string): Observable<string> {
        return Observable.create(championName + '_BUILD');
    }
}
