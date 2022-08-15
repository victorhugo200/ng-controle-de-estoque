import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  listUsers: User[] = [
    {
      id: 0,
      name: 'Victor',
      userName: 'Victor1',
      password: '123',
      dateOfBirth: new Date('2000/06/30'),
    },
  ];

  constructor() {}

  getUser(username: string) {
    const { name, userName } = this.listUsers.find(
      (user) => user.userName === username
    ) as User;
    return {
      name,
      userName,
    };
  }

  addUser(user: User) {
    this.listUsers.push(user);
  }

  userExists(userName: string, password: string) {
    return this.listUsers.some(
      (user) => user.userName === userName && user.password === password
    );
  }
}
