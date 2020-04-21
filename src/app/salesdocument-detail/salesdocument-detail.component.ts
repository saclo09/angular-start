import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SalesdocumentsService } from '../salesdocuments.service';

@Component({
  selector: 'app-salesdocument-detail',
  templateUrl: './salesdocument-detail.component.html',
  styleUrls: ['./salesdocument-detail.component.css']
})
export class SalesdocumentDetailComponent implements OnInit {

  addSaleDocForm;
  constructor( private salesdocumentsService :SalesdocumentsService,private formBuilder: FormBuilder,) { 
    this.addSaleDocForm = this.formBuilder.group({
     companyCode: '',
     salesDocumentNo: '',
     salesOfficeCode: '',
     orderName: '',
     paymentTerm: '',
     soldToPartyCode: '',
     shipToPartyCode: '',
     billToPartyCode: '',
     payerCode: '',
     endUserCode: '',
     salesPersonCode: '',
     taxCode: '1' ,
     insertUser: '',
     insertDateTime: '',
     updateUser: '',
     updateDateTime: ''    
   });
 }

  ngOnInit(): void {
  }

  OnAddSalesDoc(body){
    this.salesdocumentsService.SaveSalesdocuments(body);
  }

}
