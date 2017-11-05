import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './champions.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: 'champions',
        component: ChampionsComponent,
        children: [
            {
                path: '',
                component: ListComponent
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
export class ChampionsRoutingModule {
}
