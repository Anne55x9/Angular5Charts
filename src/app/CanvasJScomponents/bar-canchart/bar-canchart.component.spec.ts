import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCanchartComponent } from './bar-canchart.component';

describe('BarCanchartComponent', () => {
  let component: BarCanchartComponent;
  let fixture: ComponentFixture<BarCanchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarCanchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCanchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
