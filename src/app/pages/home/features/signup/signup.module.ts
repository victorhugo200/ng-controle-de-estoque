import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input-text/input-text.module';
import { InputPasswordModule } from 'src/app/shared/components/input-password/input-password.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';
import { MessageErrorModule } from 'src/app/shared/components/message-error/message-error.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    InputModule,
    InputPasswordModule,
    ButtonModule,
    CalendarModule,
    RouterModule,
    MessageErrorModule,
  ],
  exports: [SignupComponent],
})
export class SignupModule {}
