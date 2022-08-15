import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';
import { LoginService } from 'src/app/shared/service/login.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let messageService: MessageService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule],
      providers: [LoginService, FormBuilder, MessageService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    messageService = TestBed.get(MessageService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login success when login is called', () => {
    // Arrange
    const user = {
      id: 1,
      name: 'usuario 1',
      userName: 'usuario 1',
      password: '123',
      dateOfBirth: new Date('2000/03/04'),
    };
    component.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
    component.loginForm.get('userName')?.setValue('usuario 1');
    component.loginForm.get('password ')?.setValue('1234');
    component.loginForm.updateValueAndValidity();
    const spyRouter = spyOn(router, 'navigate');
    spyOn(loginService, 'authenticate').and.returnValue(of(user));

    // Act
    component.login();

    // Assert
    expect(spyRouter).toHaveBeenCalledWith(['dashboard']);
  });

  it('should login error when login is called', () => {
    // Arrange
    component.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
    component.loginForm.get('userName')?.setValue('usuario 1');
    component.loginForm.get('password ')?.setValue('1234');
    component.loginForm.updateValueAndValidity();

    const spyMark = spyOn(component.loginForm, 'markAsTouched');
    spyOn(loginService, 'authenticate').and.returnValue(throwError(() => ''));

    // Act
    component.login();

    // Assert
    expect(spyMark).toHaveBeenCalled();
  });
});
