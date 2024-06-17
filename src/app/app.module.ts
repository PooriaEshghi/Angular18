import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { sharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, sharedModule, TasksModule],

})
export class AppModule { }