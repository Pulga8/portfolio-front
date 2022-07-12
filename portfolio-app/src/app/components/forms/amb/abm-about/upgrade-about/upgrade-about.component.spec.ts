import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeAboutComponent } from './upgrade-about.component';

describe('UpgradeAboutComponent', () => {
  let component: UpgradeAboutComponent;
  let fixture: ComponentFixture<UpgradeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
