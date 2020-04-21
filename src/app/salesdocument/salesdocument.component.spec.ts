import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdocumentComponent } from './salesdocument.component';

describe('SalesdocumentComponent', () => {
  let component: SalesdocumentComponent;
  let fixture: ComponentFixture<SalesdocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesdocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
