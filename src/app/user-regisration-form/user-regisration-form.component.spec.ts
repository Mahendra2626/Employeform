import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisrationFormComponent } from './user-regisration-form.component';

describe('UserRegisrationFormComponent', () => {
  let component: UserRegisrationFormComponent;
  let fixture: ComponentFixture<UserRegisrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
