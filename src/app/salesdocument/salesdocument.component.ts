import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SalesdocumentsService } from '../salesdocuments.service';

@Component({
  selector: 'app-salesdocument',
  templateUrl: './salesdocument.component.html',
  styleUrls: ['./salesdocument.component.css']
})
export class SalesdocumentComponent implements OnInit {

  constructor( private route: ActivatedRoute,private salesdocumentsService :SalesdocumentsService,)  { }

    salesDocument
    async ngOnInit(){
    let items = await this.salesdocumentsService.getSalesdocuments();
    this.route.paramMap.subscribe(
      params => {
        this.salesDocument = items.find( x=>
          (x!=null&& x.companyCode ==+params.get('companyCode') &&
           x.salesDocumentNo==+params.get('salesDocumentNo'))
          );
       
       }
      );
  }

}
