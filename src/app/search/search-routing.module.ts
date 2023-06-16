import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { ContainerFormComponent } from './container-form/container-form.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: '',
        component: ContainerFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
