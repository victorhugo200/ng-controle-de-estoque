import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputModel } from 'src/app/shared/models/input-text';
import { UsersService } from 'src/app/shared/service/users.service';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [new Date(), [Validators.required, validatorDateOfBirth()]],
      password: ['', [Validators.required]],
    });
  }

  signup() {
    console.log(this.signupForm?.get('dateOfBirth')?.valid);
    if (this.signupForm.valid) {
      const user = {
        ...this.signupForm.getRawValue(),
        id: this.getId(),
      };
      this.usersService.addUser(user);
      this.router.navigate(['']);
    }
  }

  private getId() {
    const listUsers = this.usersService.listUsers;
    const id = listUsers[listUsers.length - 1].id;
    return id + 1;
  }
}

function validatorDateOfBirth() {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const today = new Date();
    const ageIsValid = value.getFullYear() + 18 < today.getFullYear();
    return !ageIsValid ? { ageIsInvalid: true } : null;
  };
}
