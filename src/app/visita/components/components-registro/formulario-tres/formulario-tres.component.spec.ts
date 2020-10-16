import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTresComponent } from './formulario-tres.component';

describe('FormularioTresComponent', () => {
  let component: FormularioTresComponent;
  let fixture: ComponentFixture<FormularioTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
