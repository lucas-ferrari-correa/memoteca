import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/form/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/form/list-thought/list-thought.component';
import { ExcludeThoughtComponent } from './components/form/exclude-thought/exclude-thought.component';
import { EditThoughtComponent } from './components/form/edit-thought/edit-thought.component';
import { CustomReuseStrategy } from './providers/custom-reuse-strategy';

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
    component: ListThoughtComponent,
    data: {
      reuseComponent: true
    }
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
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
})
export class AppRoutingModule { }
