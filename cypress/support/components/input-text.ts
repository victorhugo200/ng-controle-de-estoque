import { elements } from '../elements/elements';

class InputText {
  waitForInputText(): void {
    cy.get(elements.input.text.element).should('be.visible');
  }

  setValue(value: string): void {
    this.waitForInputText();
    cy.get(elements.input.text.element).type(value);
    this.eventBlur();
  }

  haveValue(text: string): void {
    this.waitForInputText();
    cy.get(elements.input.text.element)
      .invoke('val')
      .then((value) => {
        expect(text).eq(value);
      });
  }

  waitForErrorMessage(key: string, text: string) {
    cy.get((elements.input.text.errors as any)[key])
      .should('be.visible')
      .should('have.text', text);
  }

  eventBlur() {
    cy.get(elements.input.text.element).focus().blur();
  }
}

export default new InputText();
