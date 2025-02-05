import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContractorGeneralInformationComponent } from './sub-contractor-general-information.component';

describe('SubContractorGeneralInformationComponent', () => {
  let component: SubContractorGeneralInformationComponent;
  let fixture: ComponentFixture<SubContractorGeneralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubContractorGeneralInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubContractorGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
