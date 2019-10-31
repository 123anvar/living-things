import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnivoresComponent } from './carnivores.component';

describe('CarnivoresComponent', () => {
  let component: CarnivoresComponent;
  let fixture: ComponentFixture<CarnivoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnivoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnivoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
