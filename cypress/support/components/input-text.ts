import { elements } from '../elements/elements';

class InputText {
  waitForInputText(): void {
    cy.get(elements.input.text.element).should('be.visible');
  }

  setValue(value: string): void {
    this.waitForInputText();
    cy.get(elements.input.text.element).type(value).blur();
  }

  haveValue(text: string): void {
    this.waitForInputText();
    cy.get(elements.input.text.element)
      .invoke('val')
      .then((value) => {
        expect(text).eq(value);
      });
  }
}

export default new InputText();
