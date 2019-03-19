import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHighchartsComponent } from './dynamic-highcharts.component';

describe('DynamicHighchartsComponent', () => {
  let component: DynamicHighchartsComponent;
  let fixture: ComponentFixture<DynamicHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
