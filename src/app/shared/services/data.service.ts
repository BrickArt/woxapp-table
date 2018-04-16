import { Injectable } from '@angular/core';
import { BaseApi } from '../core/base-api';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService extends BaseApi {

  constructor(public http: Http) {
    super(http)
  }

  getData(data_type: string) : Observable<any> {
    return this.get(`api/${data_type}`)
  }

}
