import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputModel } from '../input-text/input-text.component';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css'],
})
export class InputPasswordComponent implements OnInit {
  @Input() formRef!: FormGroup;
  @Input() controlName!: string;
  @Input() spec!: {
    icon: string;
    placeholder: string;
  };
  type = 'password';

  constructor() {}

  ngOnInit(): void {}

  toggleIcon() {
    if (this.type === 'text' && this.spec.icon === 'pi-eye') {
      this.type = 'password';
      this.spec.icon = 'pi-eye-slash';
    } else {
      this.spec.icon = 'pi-eye';
      this.type = 'text';
    }
  }
}
