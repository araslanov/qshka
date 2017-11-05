import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildsComponent } from './builds.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: 'builds',
        component: BuildsComponent,
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
export class BuildsRoutingModule {
}
