import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechajschartComponent } from './linechajschart.component';

describe('LinechajschartComponent', () => {
  let component: LinechajschartComponent;
  let fixture: ComponentFixture<LinechajschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechajschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechajschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
