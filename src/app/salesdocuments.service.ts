
import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';




@Injectable(
    {providedIn: 'root'}
)
export class SalesdocumentsService {
    
    constructor(private http: HttpClient) { }   
    results=[];

     async getSalesdocuments() {
      await  this.http.get('http://localhost:61683/SalesDocuments?$format=json')
      .toPromise().then(data => {
        this.results = data["value"];   
        console.log(data["value"]) ;
      });
      
        
      console.log(this.results) ;
      return  this.results;       
    }
}