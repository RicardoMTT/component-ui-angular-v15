import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { ContainerFormComponent } from './container-form/container-form.component';
import { CountDownComponent } from './count-down/count-down.component'


@NgModule({
  declarations: [
    SearchComponent,
    SearchBarComponent,
    ContainerFormComponent,
    CountDownComponent,
    
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
