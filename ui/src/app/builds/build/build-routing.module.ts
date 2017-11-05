import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { BuildComponent } from './build.component';
import { ItemsComponent } from './items/items.component';
import { MasteriesComponent } from './masteries/masteries.component';
import { RunesComponent } from './runes/runes.component';
import { SummonerSpellsComponent } from './summoner-spells/summoner-spells.component';

const routes: Routes = [
    {
        path: 'builds/:id',
        component: BuildComponent,
        children: [
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
            },
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
export class BuildRoutingModule {
}
