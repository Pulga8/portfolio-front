import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmExperienceComponent } from './abm-experience.component';

describe('AbmExperienceComponent', () => {
  let component: AbmExperienceComponent;
  let fixture: ComponentFixture<AbmExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
