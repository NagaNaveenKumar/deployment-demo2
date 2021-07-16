import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonateComponent } from './blooddonate.component';

describe('BlooddonateComponent', () => {
  let component: BlooddonateComponent;
  let fixture: ComponentFixture<BlooddonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
