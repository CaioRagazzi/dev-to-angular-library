import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevArrowDownComponent } from './dev-arrow-down.component';

describe('DevArrowDownComponent', () => {
  let component: DevArrowDownComponent;
  let fixture: ComponentFixture<DevArrowDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevArrowDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
