import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDatosDosComponent } from './perfil-datos-dos.component';

describe('PerfilDatosDosComponent', () => {
  let component: PerfilDatosDosComponent;
  let fixture: ComponentFixture<PerfilDatosDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDatosDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDatosDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
