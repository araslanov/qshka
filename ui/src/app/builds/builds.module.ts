import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ListComponent
    ],
    providers: [
        ListService
    ]
})
export class BuildsModule {
}
