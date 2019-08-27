import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { AboutComponent } from "./about/about.component";
import { AboutModule } from "./about/about.module";
import { LayoutModule } from "./layout/layout.module";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "todo", component: TodoComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/todo", pathMatch: "full" }
];
@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, AboutModule, LayoutModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
