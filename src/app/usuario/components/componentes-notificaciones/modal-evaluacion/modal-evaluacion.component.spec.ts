import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEvaluacionComponent } from './modal-evaluacion.component';

describe('ModalEvaluacionComponent', () => {
  let component: ModalEvaluacionComponent;
  let fixture: ComponentFixture<ModalEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
