import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { LayoutModule } from "./layout/layout.module";
import { AppRoutingModule } from './app.routing.module'

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
