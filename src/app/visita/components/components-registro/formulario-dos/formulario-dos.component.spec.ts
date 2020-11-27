import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDosComponent } from './formulario-dos.component';

describe('FormularioDosComponent', () => {
  let component: FormularioDosComponent;
  let fixture: ComponentFixture<FormularioDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
