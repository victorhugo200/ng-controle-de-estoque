import { elements } from '../elements/elements';

class Toaster {
  waitForToaster(): void {
    cy.get(elements.toaster.element).should('be.visible');
  }

  waitForToasterTitle(text: string): void {
    cy.get(elements.toaster.title)
      .should('be.visible')
      .should('have.text', text);
  }

  waitForToasterDescription(description: string): void {
    cy.get(elements.toaster.description)
      .should('be.visible')
      .should('have.text', description);
  }

  waitForToasterIcon(): void {
    cy.get(elements.toaster.icon).should('be.visible');
  }
  waitForToasterIconClose(): void {
    cy.get(elements.toaster.iconClose).should('be.visible');
  }
}

export default new Toaster();
