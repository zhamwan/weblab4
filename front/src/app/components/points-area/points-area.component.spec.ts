import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsAreaComponent } from './points-area.component';

describe('PointsAreaComponent', () => {
  let component: PointsAreaComponent;
  let fixture: ComponentFixture<PointsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
