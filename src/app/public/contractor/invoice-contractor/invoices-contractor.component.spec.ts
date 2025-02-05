import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesContractorComponent } from './invoices-contractor.component';

describe('InvoicesComponent', () => {
  let component: InvoicesContractorComponent;
  let fixture: ComponentFixture<InvoicesContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicesContractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
