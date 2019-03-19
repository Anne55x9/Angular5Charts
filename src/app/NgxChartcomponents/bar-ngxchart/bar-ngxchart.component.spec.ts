import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNgxchartComponent } from './bar-ngxchart.component';

describe('BarNgxchartComponent', () => {
  let component: BarNgxchartComponent;
  let fixture: ComponentFixture<BarNgxchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarNgxchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarNgxchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
