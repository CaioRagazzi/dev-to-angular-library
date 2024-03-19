import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevArrowLeftComponent } from './dev-arrow-left.component';

describe('DevArrowLeftComponent', () => {
  let component: DevArrowLeftComponent;
  let fixture: ComponentFixture<DevArrowLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevArrowLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevArrowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
