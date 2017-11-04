import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BuildsModule } from '../builds/builds.module';
import { PlayersModule } from '../players/players.module';

@NgModule({
    imports: [
        BrowserModule,
        BuildsModule,
        PlayersModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
