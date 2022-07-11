import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeExperienceComponent } from './upgrade-experience.component';

describe('UpgradeExperienceComponent', () => {
  let component: UpgradeExperienceComponent;
  let fixture: ComponentFixture<UpgradeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
