import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add user when addUser is called', () => {
    // Arrange
    const user: User = {
      id: 2,
      name: 'Usuario 2',
      userName: 'Usuario 2',
      password: '123',
    };
    service.listUsers = [];

    // Act
    service.addUser(user);

    // Assert
    expect(service.listUsers.length).toBe(1);
    expect(service.listUsers[0]).toBe(user);
  });

  it('should return one user when getUser is called', () => {
    // Act
    const { name, userName } = service.getUser('Victor1');

    // Assert
    expect(name).toBe('Victor');
    expect(userName).toBe('Victor1');
  });

  it('should return true when userExists is called', () => {
    // Arrange
    const userName = 'Victor1';
    const password = '123';

    // Act
    const userExists = service.userExists(userName, password);

    // Assert
    expect(userExists).toBe(true);
  });

  it('should return false when userExists is called', () => {
    // Arrange
    const userName = 'Usuario124';
    const password = '123';

    // Act
    const userExists = service.userExists(userName, password);

    // Assert
    expect(userExists).toBe(false);
  });
});
