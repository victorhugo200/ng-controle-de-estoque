import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, TagModule, ButtonModule, InputTextModule, CardModule],
  exports: [LoginComponent],
})
export class LoginModule {}
