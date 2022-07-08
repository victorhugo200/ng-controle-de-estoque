import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputModel } from 'src/app/shared/models/input-text';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  public specInputName: InputModel = {
    type: 'text',
    icon: 'pi-user',
    placeholder: 'Name',
  };
  public specInputUserName: InputModel = {
    type: 'text',
    icon: 'pi-user',
    placeholder: 'Username',
  };
  public specInputEmail: InputModel = {
    type: 'text',
    icon: 'pi-envelope',
    placeholder: 'E-mail',
  };

  public specInputPassword = {
    icon: 'pi-eye',
    placeholder: 'Password',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const pattern = '^[a-zA-Z0-9]+$';
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16),
          Validators.pattern(pattern),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [''],
      password: ['', [Validators.required]],
    });
  }
}
