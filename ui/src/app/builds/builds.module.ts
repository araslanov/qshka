import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { BrowserModule } from '@angular/platform-browser';
import { BuildsComponent } from './builds.component';
import { BuildModule } from './build/build.module';
import { BuildsRoutingModule } from './builds-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BuildModule,
        BuildsRoutingModule
    ],
    declarations: [
        BuildsComponent,
        ListComponent
    ],
    providers: [
        ListService
    ]
})
export class BuildsModule {
}
