import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardHoverTwoComponent } from './card-hover-two/card-hover-two.component';


@NgModule({
  declarations: [
    CardComponent,
    CardHoverComponent,
    CardDetailComponent,
    CardHoverTwoComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
