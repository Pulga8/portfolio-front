import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeSkillsComponent } from './upgrade-skills.component';

describe('UpgradeSkillsComponent', () => {
  let component: UpgradeSkillsComponent;
  let fixture: ComponentFixture<UpgradeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
