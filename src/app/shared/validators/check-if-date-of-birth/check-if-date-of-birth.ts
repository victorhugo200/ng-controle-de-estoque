import { AbstractControl, ValidationErrors } from '@angular/forms';

export function checkIfDateOfBirth() {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const today = new Date();
    const ageIsValid = value.getFullYear() + 18 < today.getFullYear();
    return !ageIsValid ? { ageIsInvalid: true } : null;
  };
}
