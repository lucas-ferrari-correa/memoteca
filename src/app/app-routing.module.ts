import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/form/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/form/list-thought/list-thought.component';
import { ExcludeThoughtComponent } from './components/form/exclude-thought/exclude-thought.component';
import { EditThoughtComponent } from './components/form/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full',
  },
  {
    path: 'create-thought',
    component: CreateThoughtComponent
  },
  {
    path: 'list-thought',
    component: ListThoughtComponent
  },
  {
    path: 'thought/exclude/:id',
    component: ExcludeThoughtComponent
  },
  {
    path: 'thought/edit/:id',
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
