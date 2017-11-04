import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BuildComponent } from './build/build.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
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
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
