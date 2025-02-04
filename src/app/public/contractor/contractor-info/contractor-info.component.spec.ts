import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorInfoComponent } from '././contractor-info.component';

describe('ContractorDashBordComponent', () => {
  let component: ContractorInfoComponent;
  let fixture: ComponentFixture<ContractorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractorInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
