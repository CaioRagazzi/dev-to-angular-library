import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevArrowUpComponent } from './dev-arrow-up.component';

describe('DevArrowUpComponent', () => {
  let component: DevArrowUpComponent;
  let fixture: ComponentFixture<DevArrowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevArrowUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevArrowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
