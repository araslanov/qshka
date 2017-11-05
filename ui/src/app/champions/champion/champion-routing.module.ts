import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ChampionComponent } from './champion.component';
import { ItemsComponent } from './items/items.component';
import { MasteriesComponent } from './masteries/masteries.component';
import { RunesComponent } from './runes/runes.component';
import { SummonerSpellsComponent } from './summoner-spells/summoner-spells.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
    {
        path: 'champions/:id',
        component: ChampionComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: 'items',
                component: ItemsComponent
            },
            {
                path: 'masteries',
                component: MasteriesComponent
            },
            {
                path: 'runes',
                component: RunesComponent
            },
            {
                path: 'skills',
                component: SkillsComponent
            },
            {
                path: 'summoner-spells',
                component: SummonerSpellsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChampionRoutingModule {
}
