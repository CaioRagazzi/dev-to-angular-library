import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevArrowRightComponent } from './dev-arrow-right.component';

describe('DevArrowRightComponent', () => {
  let component: DevArrowRightComponent;
  let fixture: ComponentFixture<DevArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevArrowRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
