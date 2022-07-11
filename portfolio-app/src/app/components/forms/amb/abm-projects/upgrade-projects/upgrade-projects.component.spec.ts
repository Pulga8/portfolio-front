import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeProjectsComponent } from './upgrade-projects.component';

describe('UpgradeProjectsComponent', () => {
  let component: UpgradeProjectsComponent;
  let fixture: ComponentFixture<UpgradeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
