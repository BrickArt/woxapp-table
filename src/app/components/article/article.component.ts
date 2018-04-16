import { Component, OnInit } from '@angular/core';
import { TableData } from '../../shared/models/table-data.model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {

  DATA_TYPES = [
    { name: 'Маленький', value: 'SMALL' },
    { name: 'Средний', value: 'MEDIUM' },
    { name: 'Большой', value: 'LARGE' }
  ]

  tableHeaders: {} = {};
  tableData: TableData[] = [];
  selectedRowData: {};

  
  constructor(private dataService: DataService) { }

  private setNewData(type) {
    this.tableData = []
    this.dataService.getData(type).subscribe(data => {
      console.log(data)
      this.tableHeaders = data[0];

      data.slice(1).forEach(d => {
        this.tableData.push({ id: d[0], name: d[1], price: d[2], quantity: d[3] })
      });
    })
    console.log(this.tableData)
  }

  handleChangeDataType(value) {
    this.selectedRowData = null
    this.setNewData(value)
  }

  handleSelecteRow(row) {
    console.log(row)
    this.selectedRowData = {...row};
    console.log(this.selectedRowData)
  }

}
