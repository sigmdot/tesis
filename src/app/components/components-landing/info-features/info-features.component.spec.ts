import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFeaturesComponent } from './info-features.component';

describe('InfoFeaturesComponent', () => {
  let component: InfoFeaturesComponent;
  let fixture: ComponentFixture<InfoFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
