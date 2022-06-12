import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
  ],
  exports: [InputTextComponent],
})
export class InputModule {}
