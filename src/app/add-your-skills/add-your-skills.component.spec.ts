import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourSkillsComponent } from './add-your-skills.component';

describe('AddYourSkillsComponent', () => {
  let component: AddYourSkillsComponent;
  let fixture: ComponentFixture<AddYourSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddYourSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddYourSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
