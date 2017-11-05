import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { logging } from 'selenium-webdriver';
import Entry = logging.Entry;

@Injectable()
export class ChampionService {
    getChampionList(): string[] {
        return [
            'Katarina', 'Malzahar', 'Nidalee', 'Jhin',
            'Yorick', 'Karthus', 'Rengar', 'Akali',
            'Veigar', 'Braum', 'Vayne', 'Galio',
            'Fiora', 'Amumu', 'Kha\'zix', 'Jayce',
            'Zed', 'Annie', 'Lucian', 'Ashe',
            'Lux', 'Morgana', 'Miss Fortune', 'Graves',
            'Twitch', 'Soraka', 'Ryze', 'Karma',
            'Alistar', 'Blitzcrank', 'Thresh', 'Xayah',
            'Azir', 'Gnar', 'Aurelion Sol', 'Talon',
            'Jarvan IV', 'Xin Zhao', 'Rek\'sai', 'Ornn',
            'Quinn', 'Renekton', 'Shen', 'Riven',
            'Tristana', 'Caitlyn', 'Darius', 'Bard',
            'Kennen', 'Illaoi', 'Pantheon', 'Cassiopea',
            'Orianna', 'Urgot', 'Vi', 'Jinx',
            'Maokai', 'Teemo', 'Nunu', 'Varus',
            'Shyvana', 'Udyr', 'Aatrox', 'Ahri',
            'Anivia', 'Brand', 'Camille', 'Cho\'Gath',
            'Corki', 'Diana', 'Dr. Mundo', 'Draven',
            'Ekko', 'Elise', 'Evelynn', 'Ezreal',
            'Fiddlesticks', 'Fizz', 'Gankplank', 'Garen',
            'Gragas', 'Hecarim', 'Heimerdinger', 'Irelia',
            'Warwick', 'Wukong', 'Zac', 'Zyra',
            'Zilean', 'Ziggs', 'Yasuo', 'Xerath',
            'Volibear', 'Vladimir', 'Victor', 'Poppy',
            'Rakan'
        ];
    }

    getChampionEntries(): Array<any> {
        const championList = this.getChampionList();
        championList.sort();
        const map = new Map();
        for (const champion of championList) {
            const letter = champion.substring(0, 1);
            if (map.has(letter)) {
                map.get(letter).push(champion);
            } else {
                map.set(letter, [ champion ]);
            }
        }
        return Array.from(map.entries());
    }

    getBuild(championName: string): Observable<string> {
        return Observable.create(championName + '_BUILD');
    }
}
