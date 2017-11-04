import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BuildsModule } from './builds/builds.module';
import { PlayersModule } from './players/players.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        BrowserModule,
        BuildsModule,
        PlayersModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        PageNotFoundComponent,
        AboutComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
