import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.sass']
})
export class RadioButtonComponent implements OnInit {

  @Input() DATA_TYPES;
  selectedDataType: string
  @Output() changeDataType = new EventEmitter();

  ngOnInit() {
    this.selectedDataType = this.DATA_TYPES[0].value;
    this.changeDataType.emit(this.selectedDataType);   
  }

  onChange() {
    this.changeDataType.emit(this.selectedDataType);
  }

}
