import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputModel } from 'src/app/shared/models/input-text';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: '',
      password: '',
    });
  }
}
