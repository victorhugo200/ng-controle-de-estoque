import { TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { checkIfDateOfBirth } from './check-if-date-of-birth';

describe('CheckIfDateOfBirth', () => {
  const control = new FormControl(new Date());

  //   it('Should return error when age is invalid', () => {
  //     // Arrange
  //     control.setValidators(checkIfDateOfBirth());
  //     control.updateValueAndValidity();

  //     // Assert
  //     expect(control.hasError('ageIsInvalid')).toBe(true);
  //   });
});
