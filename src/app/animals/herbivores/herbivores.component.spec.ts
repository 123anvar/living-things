import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbivoresComponent } from './herbivores.component';

describe('HerbivoresComponent', () => {
  let component: HerbivoresComponent;
  let fixture: ComponentFixture<HerbivoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbivoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbivoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
