import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private usersService: UsersService) {}

  authenticate(userName: string, password: string): Observable<User> {
    const hasUser = this.usersService.userExists(userName, password);
    if (hasUser) {
      const user = this.usersService.getUser(userName) as User;
      return of(user);
    } else {
      return throwError(() => new Error('User or password incorrect !'));
    }
  }
}
