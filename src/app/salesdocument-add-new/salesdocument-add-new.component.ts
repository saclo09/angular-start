import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SalesdocumentsService } from '../salesdocuments.service';

@Component({
  selector: 'app-salesdocument-add-new',
  templateUrl: './salesdocument-add-new.component.html',
  styleUrls: ['./salesdocument-add-new.component.css']
})
export class SalesdocumentAddNewComponent implements OnInit {

  addSaleDocForm;
  constructor( private salesdocumentsService :SalesdocumentsService,private formBuilder: FormBuilder, private router: Router) { 
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
   let successful= this.salesdocumentsService.SaveSalesdocuments(body);    
    if(successful){
    this.router.navigate(['salesdocuments'], { queryParams: {}});
    }
  }

}
