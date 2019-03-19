import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCanchartComponent } from './line-canchart.component';

describe('LineCanchartComponent', () => {
  let component: LineCanchartComponent;
  let fixture: ComponentFixture<LineCanchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineCanchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCanchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
