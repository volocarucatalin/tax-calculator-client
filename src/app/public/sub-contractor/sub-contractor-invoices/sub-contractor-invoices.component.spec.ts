import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContractorInvoicesComponent } from './sub-contractor-invoices.component';

describe('SubContractorInvoicesComponent', () => {
  let component: SubContractorInvoicesComponent;
  let fixture: ComponentFixture<SubContractorInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubContractorInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubContractorInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
