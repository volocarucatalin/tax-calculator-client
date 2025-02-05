import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorGeneralInformationComponent } from './contractor-general-information.component';

describe('ContractorGeneralInformationComponent', () => {
  let component: ContractorGeneralInformationComponent;
  let fixture: ComponentFixture<ContractorGeneralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractorGeneralInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
