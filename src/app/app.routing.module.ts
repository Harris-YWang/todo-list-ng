import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'todo/:id', component: DetailComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
