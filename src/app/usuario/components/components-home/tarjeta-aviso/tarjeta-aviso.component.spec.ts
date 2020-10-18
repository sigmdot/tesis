import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAvisoComponent } from './tarjeta-aviso.component';

describe('TarjetaAvisoComponent', () => {
  let component: TarjetaAvisoComponent;
  let fixture: ComponentFixture<TarjetaAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
