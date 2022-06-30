import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { UsersService } from './users.service';

describe('LoginService', () => {
  let service: LoginService;
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });
    service = TestBed.inject(LoginService);
    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when authenticate is called', () => {
    // Arrange
    const username = 'Usuario 1';
    const password = '123';
    const spyUserExists = spyOn(usersService, 'userExists').and.returnValue(
      true
    );
    const spyGetUser = spyOn(usersService, 'getUser').and.returnValue({
      name: 'usuario 1',
      userName: 'usuario 123',
    });

    // Act
    service.authenticate(username, password);

    // Assert
    expect(spyUserExists).toHaveBeenCalledWith(username, password);
    expect(spyGetUser).toHaveBeenCalledWith(username);
  });
  it('should return false when authenticate is called', () => {
    // Arrange
    const username = 'Usuario 1';
    const password = '123';
    const spyUserExists = spyOn(usersService, 'userExists').and.returnValue(
      false
    );

    // Act
    const returnAuthenticate = service.authenticate(username, password);

    // Assert
    expect(spyUserExists).toHaveBeenCalledWith(username, password);
    returnAuthenticate.subscribe({
      error: (error) => {
        expect(error).toBe('User or password incorrect !');
      },
    });
  });
});
