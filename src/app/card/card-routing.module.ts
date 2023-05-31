import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardHoverTwoComponent } from './card-hover-two/card-hover-two.component';

const routes: Routes = [
  { 
    path: '', 
    component: CardComponent,
    children:[
      {
        path:'',
        component:CardHoverComponent
      },
      {
        path:'details',
        component:CardDetailComponent
      },
      {
        path:'card-hover-two',
        component:CardHoverTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
