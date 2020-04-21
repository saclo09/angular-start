import { Component, OnInit } from '@angular/core';
import { SalesdocumentsService } from '../salesdocuments.service';

@Component({
  selector: 'app-salesdocument-list',
  templateUrl: './salesdocument-list.component.html',
  styleUrls: ['./salesdocument-list.component.css']
})
export class SalesdocumentListComponent implements OnInit {
  items=[];
  constructor( private salesdocumentsService :SalesdocumentsService,)  { }

  async  ngOnInit() {
    // = // 
    this.items= await this.salesdocumentsService.getSalesdocuments();     
    console.log(this.items) ;

  }
  OnAddSalesProduct(){
    var datainput = {        
      "companyCode": "1000",
      "salesDocumentNo": "1000000033",
      "salesOfficeCode": "Vvvvvv",
      "orderName": "○○○○○システム構築333",
      "paymentTerm": "1100",
      "soldToPartyCode": "0000011438",
      "shipToPartyCode": "0000011438",
      "billToPartyCode": "0000011438",
      "payerCode": "0000011438",
      "endUserCode": "0000011438",
      "salesPersonCode": "70001120",
      "taxCode": "1 ",
      "insertUser": "79990010",
      "insertDateTime": "2019-12-01T09:01:01+07:00",
      "updateUser": "79991010",
      "updateDateTime": "2019-12-01T10:01:01+07:00"    
      };
    this.salesdocumentsService.SaveSalesdocuments(datainput);
  }


}
