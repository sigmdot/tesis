import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrabajoConcretadoComponent } from './detalle-trabajo-concretado.component';

describe('DetalleTrabajoConcretadoComponent', () => {
  let component: DetalleTrabajoConcretadoComponent;
  let fixture: ComponentFixture<DetalleTrabajoConcretadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTrabajoConcretadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTrabajoConcretadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
