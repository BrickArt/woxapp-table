import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ArticleComponent } from './components/article/article.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { SharedModule } from './shared/shared.module';
import { DataService } from './shared/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RadioButtonComponent,
    ArticleComponent,
    AddButtonComponent
  ],
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
