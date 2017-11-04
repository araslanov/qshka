import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildsComponent } from './builds.component';
import { BuildComponent } from './build/build.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: 'builds',
        component: BuildsComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: ':id',
                component: BuildComponent
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
export class BuildsRoutingModule {
}
