import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from "@angular/router";
import { BuildComponent } from './build/build.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'build',
                component: BuildComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        BuildComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
