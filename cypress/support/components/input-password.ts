import { elements } from '../elements/elements';

class InputPassword {
  waitForInputPassword(): void {
    cy.get(elements.input.password.element).should('be.visible');
  }

  setValue(value: string): void {
    this.waitForInputPassword();
    cy.get(elements.input.password.element).type(value).blur();
  }

  haveValue(text: string): void {
    this.waitForInputPassword();
    cy.get(elements.input.password.element)
      .invoke('val')
      .then((value) => {
        expect(text).eq(value);
      });
  }

  waitForErrorMessage(key: string, text: string) {
    cy.get((elements.input.password.errors as any)[key])
      .should('be.visible')
      .should('have.text', text);
  }

  eventBlur() {
    cy.get(elements.input.password.element).focus().blur();
  }
}

export default new InputPassword();
