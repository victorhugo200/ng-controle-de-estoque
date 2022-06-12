import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  exports: [InputPasswordComponent],
})
export class InputPasswordModule {}
