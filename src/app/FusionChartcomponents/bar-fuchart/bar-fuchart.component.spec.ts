import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFuchartComponent } from './bar-fuchart.component';

describe('BarFuchartComponent', () => {
  let component: BarFuchartComponent;
  let fixture: ComponentFixture<BarFuchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarFuchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarFuchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
