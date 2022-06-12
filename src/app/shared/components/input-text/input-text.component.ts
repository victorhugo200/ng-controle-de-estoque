import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface InputModel {
  type: 'text' | 'password' | 'currency';
  icon?: string;
  placeholder?: string;
}
@Component({
  selector: 'app-input',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() formRef!: FormGroup;
  @Input() controlName!: string;
  @Input() spec!: InputModel;
  constructor() {}

  ngOnInit(): void {}
}
