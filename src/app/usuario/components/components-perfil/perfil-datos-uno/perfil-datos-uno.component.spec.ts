import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDatosUnoComponent } from './perfil-datos-uno.component';

describe('PerfilDatosUnoComponent', () => {
  let component: PerfilDatosUnoComponent;
  let fixture: ComponentFixture<PerfilDatosUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDatosUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDatosUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
