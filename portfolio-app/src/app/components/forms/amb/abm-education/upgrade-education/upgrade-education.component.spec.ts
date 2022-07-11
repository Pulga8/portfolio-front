import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeEducationComponent } from './upgrade-education.component';

describe('UpgradeEducationComponent', () => {
  let component: UpgradeEducationComponent;
  let fixture: ComponentFixture<UpgradeEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
