import inputPassword from 'cypress/support/components/input-password';
import inputText from 'cypress/support/components/input-text';
import { elements } from 'cypress/support/elements/elements';

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should renderer elements', () => {
    cy.get(elements.login.title).should('be.visible');
    cy.get(elements.login.title).should('have.text', 'LogIn');
    cy.get(elements.login.textCreateAccount)
      .should('be.visible')
      .should('have.text', ' Do you not have account ? Create Account');
    inputText.waitForInputText();
    inputPassword.waitForInputPassword();
  });

  it('should login successfully ', () => {
    const userName = 'Victor1';
    const senha = '123';
    inputText.setValue(userName);
    inputText.haveValue(userName);
    inputPassword.setValue(senha);
    inputPassword.haveValue(senha);
    cy.get(elements.login.btnSubmit).click();
  });
});
