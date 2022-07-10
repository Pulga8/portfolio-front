import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmEducationComponent } from './abm-education.component';

describe('AmbEducationComponent', () => {
  let component: AbmEducationComponent;
  let fixture: ComponentFixture<AbmEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
