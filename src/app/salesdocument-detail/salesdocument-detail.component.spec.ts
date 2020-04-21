import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdocumentDetailComponent } from './salesdocument-detail.component';

describe('SalesdocumentDetailComponent', () => {
  let component: SalesdocumentDetailComponent;
  let fixture: ComponentFixture<SalesdocumentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesdocumentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
