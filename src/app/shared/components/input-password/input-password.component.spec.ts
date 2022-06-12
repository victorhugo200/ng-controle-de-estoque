import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordComponent } from './input-password.component';

describe('InputPasswordComponent', () => {
  let component: InputPasswordComponent;
  let fixture: ComponentFixture<InputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPasswordComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should alternate input-type to password and icon to pi-eye-slash when toggleIcon is called', () => {
    // Arrange
    component.spec = {
      icon: 'pi-eye',
      placeholder: 'string',
    };
    component.type = 'text';

    // Act
    component.toggleIcon();

    // Assert
    expect(component.type).toBe('password');
    expect(component.spec.icon).toBe('pi-eye-slash');
  });
  it('should alternate input-type to text and icon to pi-eye when toggleIcon is called', () => {
    // Arrange
    component.spec = {
      icon: 'pi-eye-slash',
      placeholder: 'string',
    };
    component.type = 'password';

    // Act
    component.toggleIcon();

    // Assert
    expect(component.type).toBe('text');
    expect(component.spec.icon).toBe('pi-eye');
  });
});
