import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDatosTresComponent } from './perfil-datos-tres.component';

describe('PerfilDatosTresComponent', () => {
  let component: PerfilDatosTresComponent;
  let fixture: ComponentFixture<PerfilDatosTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDatosTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDatosTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
