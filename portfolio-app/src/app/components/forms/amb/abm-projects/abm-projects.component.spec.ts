import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmProjectsComponent } from './abm-projects.component';

describe('AbmProjectsComponent', () => {
  let component: AbmProjectsComponent;
  let fixture: ComponentFixture<AbmProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
