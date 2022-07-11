import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmAboutComponent } from './abm-about.component';

describe('AbmAboutComponent', () => {
  let component: AbmAboutComponent;
  let fixture: ComponentFixture<AbmAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
