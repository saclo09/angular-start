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
      this.items= await this.salesdocumentsService.getSalesdocuments();     
    }
}
