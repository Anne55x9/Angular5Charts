import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNgxchartComponent } from './line-ngxchart.component';

describe('LineNgxchartComponent', () => {
  let component: LineNgxchartComponent;
  let fixture: ComponentFixture<LineNgxchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineNgxchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineNgxchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
