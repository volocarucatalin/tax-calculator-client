import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubContractorsComponent } from './all-sub-contractors.component';

describe('AllSubContractorsComponent', () => {
  let component: AllSubContractorsComponent;
  let fixture: ComponentFixture<AllSubContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSubContractorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSubContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


