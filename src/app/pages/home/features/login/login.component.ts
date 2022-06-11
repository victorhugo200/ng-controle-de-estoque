import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  iconEye = 'pi-eye';
  type = 'text';
  constructor() {}

  ngOnInit(): void {}

  toggleIcon() {
    if (this.type === 'text' && this.iconEye === 'pi-eye') {
      this.type = 'password';
      this.iconEye = 'pi-eye-slash';
    } else {
      this.iconEye = 'pi-eye';
      this.type = 'text';
    }
  }
}
