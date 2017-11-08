import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './players/search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    { path: '', redirectTo: '/champions', pathMatch: 'full' },
    { path: 'players', component: SearchComponent },
    { path: 'items', component: PageNotFoundComponent },
    { path: 'status', component: StatusComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent }
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
