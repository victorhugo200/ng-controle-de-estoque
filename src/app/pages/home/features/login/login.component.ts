import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InputModel } from 'src/app/shared/models/input-text';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  specInputText: InputModel = {
    type: 'text',
    icon: 'pi-user',
    placeholder: 'Username',
  };
  specInputPassword = {
    icon: 'pi-eye',
    placeholder: 'Password',
  };
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.getRawValue();
      this.loginService.authenticate(userName, password).subscribe({
        next: () => {
          this.addSingle();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'User is invalid',
            detail: 'User or password incorrect',
          });
          this.loginForm.get('userName')?.setErrors({ userNotExist: true });
          this.loginForm.get('password')?.setErrors({ userNotExist: true });
          this.loginForm.markAsTouched();
        },
      });
    }
  }

  addSingle() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }
}
