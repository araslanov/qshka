import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from "@angular/router";
import { BuildComponent } from './build/build.component';
import { ListComponent } from './list/list.component';
import { ListService } from "./list/list.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'build',
                component: BuildComponent
            },
            {
                path: 'champions',
                component: ListComponent
            },
            {
                path: '',
                redirectTo: '/champions',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        BuildComponent,
        ListComponent
    ],
    providers: [
        ListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
