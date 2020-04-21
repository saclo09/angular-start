
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../environments/environment';




@Injectable(
  { providedIn: 'root' }
)
export class SalesdocumentsService {

  constructor(private http: HttpClient) { }
  results = [];

  async getSalesdocuments() {
    await this.http.get(environment.urlApi + 'SalesDocuments?$format=json')
      .toPromise().then(data => {
        this.results = data["value"];
      });

    return this.results;
  }
  async SaveSalesdocuments(data_input) {
    let body = data_input;
    let headers = { 'Content-Type': 'application/json' };
    await this.http.post(environment.urlApi + 'SalesDocuments', body, { headers: headers })
      .toPromise().then(data => {
        this.results = data["value"];
      });
    return this.results;
  }
}