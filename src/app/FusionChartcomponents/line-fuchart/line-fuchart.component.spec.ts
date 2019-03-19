import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineFuchartComponent } from './line-fuchart.component';

describe('LineFuchartComponent', () => {
  let component: LineFuchartComponent;
  let fixture: ComponentFixture<LineFuchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineFuchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineFuchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
