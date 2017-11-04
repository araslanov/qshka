import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { BrowserModule } from '@angular/platform-browser';
import { BuildsComponent } from './builds.component';
import { BuildComponent } from './build/build.component';
import { BuildsRoutingModule } from './builds-routing.module';
import { BuildService } from './build/build.service';

@NgModule({
    imports: [
        BrowserModule,
        BuildsRoutingModule
    ],
    declarations: [
        BuildsComponent,
        ListComponent,
        BuildComponent
    ],
    providers: [
        ListService,
        BuildService
    ]
})
export class BuildsModule {
}
