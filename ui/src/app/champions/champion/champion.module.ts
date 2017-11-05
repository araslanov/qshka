import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { ChampionRoutingModule } from './champion-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChampionComponent } from './champion.component';
import { ChampionService } from './champion.service';
import { ItemsComponent } from './items/items.component';
import { RunesComponent } from './runes/runes.component';
import { MasteriesComponent } from './masteries/masteries.component';
import { SummonerSpellsComponent } from './summoner-spells/summoner-spells.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { OverviewComponent } from './overview/overview.component';
import { LetterComponent } from './alphabet/letter/letter.component';

@NgModule({
    imports: [
        BrowserModule,
        ChampionRoutingModule
    ],
    declarations: [
        ChampionComponent,
        AlphabetComponent,
        SkillsComponent,
        ItemsComponent,
        RunesComponent,
        MasteriesComponent,
        SummonerSpellsComponent,
        OverviewComponent,
        LetterComponent
    ],
    providers: [
        ChampionService
    ]
})
export class ChampionModule {
}
