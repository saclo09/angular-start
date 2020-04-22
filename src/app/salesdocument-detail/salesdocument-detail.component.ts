import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';


import { SalesdocumentsService } from '../salesdocuments.service';

@Component({
  selector: 'app-salesdocument',
  templateUrl: './salesdocument-detail.component.html',
  styleUrls: ['./salesdocument-detail.component.css']
})
export class SalesdocumentDetailComponent implements OnInit {


  editSaleDocForm;
  salesDocument;

  constructor(private route: ActivatedRoute, private salesdocumentsService: SalesdocumentsService, private formBuilder: FormBuilder, private router: Router, ) {
    this.editSaleDocForm = this.formBuilder.group({});
  }

  async ngOnInit() {

    let companyCode;
    let salesDocumentNo;
    this.route.paramMap.subscribe(
      params => {
        companyCode = params.get('companyCode');
        salesDocumentNo = params.get('salesDocumentNo');
      }
    );
    this.salesDocument = await this.salesdocumentsService.getSalesdocumentByID(companyCode, salesDocumentNo);

    this.editSaleDocForm = this.formBuilder.group({
      companyCode: this.salesDocument.companyCode,
      salesDocumentNo: this.salesDocument.salesDocumentNo,
      salesOfficeCode: this.salesDocument.salesOfficeCode,
      orderName: this.salesDocument.orderName,
      paymentTerm: this.salesDocument.paymentTerm,
      soldToPartyCode: this.salesDocument.soldToPartyCode,
      shipToPartyCode: this.salesDocument.shipToPartyCode,
      billToPartyCode: this.salesDocument.billToPartyCode,
      payerCode: this.salesDocument.payerCode,
      endUserCode: this.salesDocument.endUserCode,
      salesPersonCode: this.salesDocument.salesPersonCode,
      taxCode: this.salesDocument.taxCode,
      insertUser: this.salesDocument.insertUser,
      insertDateTime: this.salesDocument.insertDateTime,
      updateUser: this.salesDocument.updateUser,
      updateDateTime: this.salesDocument.updateDateTime
    });
  }

  async OnUpdateSalesDoc(value) {
    let successful = await this.salesdocumentsService.UpdateSalesdocuments(this.salesDocument.companyCode, this.salesDocument.salesDocumentNo, value);
   
    if (successful) {
      this.router.navigate(['salesdocuments'], { queryParams: {}});
    }
    else{
      alert("data Error!");
    }
    
  }
  async OnDelete() {
    if (confirm("Bạn có chắc muốn xóa SalesDocument này ?")) {
      let successful = await this.salesdocumentsService.DeleteSalesdocument(this.salesDocument.companyCode, this.salesDocument.salesDocumentNo);
      
      if (successful) {
        this.router.navigate(['salesdocuments'], { queryParams: {} });
      }
      
    }
  }

}
