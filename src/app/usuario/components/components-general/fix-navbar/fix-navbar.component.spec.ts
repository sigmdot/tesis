import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixNavbarComponent } from './fix-navbar.component';

describe('FixNavbarComponent', () => {
  let component: FixNavbarComponent;
  let fixture: ComponentFixture<FixNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
