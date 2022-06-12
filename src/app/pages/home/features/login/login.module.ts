import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputModule } from 'src/app/shared/components/input-text/input-text.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputPasswordModule } from 'src/app/shared/components/input-password/input-password.module';

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
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
