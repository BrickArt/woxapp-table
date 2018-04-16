import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.sass']
})
export class AddButtonComponent {

  @Output() onAddClick = new EventEmitter();

  onAdd() {
    this.onAddClick.emit();
  }

}
