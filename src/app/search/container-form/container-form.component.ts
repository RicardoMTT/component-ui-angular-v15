import { Component } from '@angular/core';

@Component({
  selector: 'app-container-form',
  templateUrl: './container-form.component.html',
  styleUrls: ['./container-form.component.scss']
})
export class ContainerFormComponent {

  emitEvent(event:any){
    console.log(event);
    
  }

}
