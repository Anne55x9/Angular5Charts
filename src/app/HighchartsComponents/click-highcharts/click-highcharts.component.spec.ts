import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickHighchartsComponent } from './click-highcharts.component';

describe('ClickHighchartsComponent', () => {
  let component: ClickHighchartsComponent;
  let fixture: ComponentFixture<ClickHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
