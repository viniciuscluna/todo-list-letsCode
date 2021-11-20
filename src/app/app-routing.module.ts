import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'add', component: AddComponent },
  { path: 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
