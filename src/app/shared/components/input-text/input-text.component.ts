import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputModel } from '../../models/input-text';

@Component({
  selector: 'app-input',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent {
  @Input() formRef!: FormGroup;
  @Input() controlName!: string;
  @Input() spec!: InputModel;

  constructor() {}
}
