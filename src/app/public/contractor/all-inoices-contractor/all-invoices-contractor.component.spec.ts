import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInvoicesContractorComponent } from './all-invoices-contractor.component';

describe('AllInvoicesContractorComponent', () => {
  let component: AllInvoicesContractorComponent;
  let fixture: ComponentFixture<AllInvoicesContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllInvoicesContractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInvoicesContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
