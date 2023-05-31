import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then((m) => m.CardModule),
  },
  {
    path: 'carousel',
    loadChildren: () =>
      import('./carousel/carousel.module').then((m) => m.CarouselModule),
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/carousel'
  },
  {
    path: '**',
    redirectTo:'/card'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
