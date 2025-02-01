import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubContractor  } from './sub-contractor.component';

describe('SubContractorComponent', () => {
  let component: CreateSubContractor ;
  let fixture: ComponentFixture<CreateSubContractor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSubContractor ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubContractor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
