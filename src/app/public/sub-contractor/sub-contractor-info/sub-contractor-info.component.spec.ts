import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContractorInfoComponent } from './sub-contractor-info.component';

describe('SubContractorInfoComponent', () => {
  let component: SubContractorInfoComponent;
  let fixture: ComponentFixture<SubContractorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubContractorInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubContractorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
