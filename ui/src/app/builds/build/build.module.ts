import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { BuildRoutingModule } from './build-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BuildComponent } from './build.component';
import { BuildService } from './build.service';
import { ItemsComponent } from './items/items.component';
import { RunesComponent } from './runes/runes.component';
import { MasteriesComponent } from './masteries/masteries.component';
import { SummonerSpellsComponent } from './summoner-spells/summoner-spells.component';
import { AlphabetComponent } from './alphabet/alphabet.component';

@NgModule({
    imports: [
        BrowserModule,
        BuildRoutingModule
    ],
    declarations: [
        BuildComponent,
        AlphabetComponent,
        SkillsComponent,
        ItemsComponent,
        RunesComponent,
        MasteriesComponent,
        SummonerSpellsComponent
    ],
    providers: [
        BuildService
    ]
})
export class BuildModule {
}
