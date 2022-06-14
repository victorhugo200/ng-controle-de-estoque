import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { InputPasswordModule } from 'src/app/shared/components/input-password/input-password.module';
import { InputModule } from 'src/app/shared/components/input-text/input-text.module';
import { ToastModule } from 'primeng/toast';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TagModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    InputModule,
    InputPasswordModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
