import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from './features/login/login.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, LoginModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
