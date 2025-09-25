import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompoent } from './login.compoent';

describe('LoginCompoent', () => {
  let component: LoginCompoent;
  let fixture: ComponentFixture<LoginCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCompoent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCompoent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
