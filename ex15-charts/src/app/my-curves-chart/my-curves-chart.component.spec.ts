import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurvesChartComponent } from './my-curves-chart.component';

describe('MyCurvesChartComponent', () => {
  let component: MyCurvesChartComponent;
  let fixture: ComponentFixture<MyCurvesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCurvesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCurvesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
