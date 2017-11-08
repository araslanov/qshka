import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ChampionsModule } from './champions/champions.module';
import { PlayersModule } from './players/players.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusComponent } from './status/status.component';
import { StatusService } from './status/status.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ChampionsModule,
        PlayersModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        PageNotFoundComponent,
        AboutComponent,
        StatusComponent
    ],
    providers: [
        StatusService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
