import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmSkillsComponent } from './abm-skills.component';

describe('AbmSkillsComponent', () => {
  let component: AbmSkillsComponent;
  let fixture: ComponentFixture<AbmSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
