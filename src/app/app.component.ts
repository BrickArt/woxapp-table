import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { TableData } from './shared/models/table-data.model';
import { Table } from './shared/models/table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  tables: Table[] = [
    { id: 1, created: +Date.now()}
  ]

  handleAdd() {
    this.tables.push({
      id: this.tables.length,
      created: +Date.now()
    })
  }
}
