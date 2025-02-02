import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorDashBordComponent } from './contractor-dash-bord.component';

describe('ContractorDashBordComponent', () => {
  let component: ContractorDashBordComponent;
  let fixture: ComponentFixture<ContractorDashBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractorDashBordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorDashBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
