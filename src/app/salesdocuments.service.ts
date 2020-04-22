
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../environments/environment';




@Injectable(
  { providedIn: 'root' }
)
export class SalesdocumentsService {

  constructor(private http: HttpClient) { }
  results = [];
  item = {};
  async getSalesdocuments() {
    await this.http.get(environment.urlApi + 'SalesDocuments?$format=json')
      .toPromise().then(data => {
        this.results = data["value"];
      });

    return this.results;
  }

  async getSalesdocumentByID(companyCode, salesDocumentNo) {

    await this.http.get(environment.urlApi + "SalesDocuments('" + companyCode + "','" + salesDocumentNo + "')?format=json")
      .toPromise().then(data => {
        this.item = data;
      });

    return this.item;
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
  async UpdateSalesdocuments(companyCode, salesDocumentNo, data_input) {
    let body = data_input;
    let headers = { 'Content-Type': 'application/json' };
    await this.http.patch(environment.urlApi + "SalesDocuments('" + companyCode + "','" + salesDocumentNo + "')", body, { headers: headers })
      .toPromise().then(data => {
        this.item = {ok:true};
      }, msg => {
        this.item = null;
      }
      );
    return this.item;;
  }
  async DeleteSalesdocument(companyCode, salesDocumentNo) {

    let headers = { 'Content-Type': 'application/json' };
    await this.http.delete(environment.urlApi + "SalesDocuments('" + companyCode + "','" + salesDocumentNo + "')", { headers: headers })
      .toPromise().then(data => {        
        this.item = {"ok":true};
      }, msg => {
        this.item = null;
      }
      );
    return this.item;
  }
}