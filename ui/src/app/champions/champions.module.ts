import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChampionsComponent } from './champions.component';
import { ChampionModule } from './champion/champion.module';
import { ChampionsRoutingModule } from './champions-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        ChampionModule,
        ChampionsRoutingModule
    ],
    declarations: [
        ChampionsComponent,
        ListComponent
    ],
    providers: [
    ]
})
export class ChampionsModule {
}
