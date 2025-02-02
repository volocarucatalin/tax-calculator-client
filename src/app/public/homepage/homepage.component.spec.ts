import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  var video = document.getElementById("myVideo") as HTMLVideoElement | null;

  video?.requestFullscreen(); // Use optional chaining to handle potential null
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
