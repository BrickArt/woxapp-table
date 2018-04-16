import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,

  MatDialogModule,

  MatIconModule,
  MatInputModule,

  MatMenuModule,

  MatSnackBarModule,
  MatToolbarModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    MatButtonModule,

    MatCardModule,
    MatCheckboxModule,

    MatDialogModule,

    MatIconModule,
    MatInputModule,

    MatMenuModule,

    MatSnackBarModule,

    MatToolbarModule,

  ]
})
export class MaterialModule { }
