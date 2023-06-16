import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-angular-ui';
  onSearch(searchTerm: string) {
    // Realiza las acciones necesarias con el término de búsqueda
    console.log('Search term:', searchTerm);
  }
}
