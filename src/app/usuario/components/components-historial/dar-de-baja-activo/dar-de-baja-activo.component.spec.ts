import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarDeBajaActivoComponent } from './dar-de-baja-activo.component';

describe('DarDeBajaActivoComponent', () => {
  let component: DarDeBajaActivoComponent;
  let fixture: ComponentFixture<DarDeBajaActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarDeBajaActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarDeBajaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
