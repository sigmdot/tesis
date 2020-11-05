import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTrabajosActivosComponent } from './tarjeta-trabajos-activos.component';

describe('TarjetaTrabajosActivosComponent', () => {
  let component: TarjetaTrabajosActivosComponent;
  let fixture: ComponentFixture<TarjetaTrabajosActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaTrabajosActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaTrabajosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
