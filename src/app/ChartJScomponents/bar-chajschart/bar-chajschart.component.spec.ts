import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChajschartComponent } from './bar-chajschart.component';

describe('BarChajschartComponent', () => {
  let component: BarChajschartComponent;
  let fixture: ComponentFixture<BarChajschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChajschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChajschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
