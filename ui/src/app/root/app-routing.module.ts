import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../builds/list/list.component';
import { SearchComponent } from '../players/search/search.component';

const routes: Routes = [
    { path: '', redirectTo: '/builds', pathMatch: 'full' },
    { path: 'builds', component: ListComponent },
    { path: 'players', component: SearchComponent },
    { path: '**', redirectTo: '/builds', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
