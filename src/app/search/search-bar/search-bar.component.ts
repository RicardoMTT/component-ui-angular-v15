import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      searchTerm: [''],
    });
    this.startListener();
  }

  startListener() {
    this.searchForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((formValue) => {
        console.log('a');
        
        const searchTerm = formValue.searchTerm;
        this.search.emit(searchTerm);
      });
  }
}
