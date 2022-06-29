import inputPassword from 'cypress/support/components/input-password';
import inputText from 'cypress/support/components/input-text';
import toaster from 'cypress/support/components/toaster';
import { elements } from 'cypress/support/elements/elements';

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should renderer elements', () => {
    cy.get(elements.login.title).should('be.visible');
    cy.get(elements.login.title).should('have.text', 'LogIn');
    cy.get(elements.login.textCreateAccount).should('be.visible');
    cy.get(elements.login.textCreateAccount).should(
      'have.text',
      ' Do you not have account ? Create Account'
    );
    inputText.waitForInputText();
    inputPassword.waitForInputPassword();
    cy.get(elements.login.btnSubmit).should('be.visible');
  });

  it('should login successfully ', () => {
    const userName = 'Victor1';
    const senha = '123';
    inputText.setValue(userName);
    inputText.haveValue(userName);
    inputPassword.setValue(senha);
    inputPassword.haveValue(senha);
    cy.get(elements.login.btnSubmit).click();
    toaster.waitForToaster();
    toaster.waitForToasterTitle('Login successfully');
    toaster.waitForToasterIcon();
    toaster.waitForToasterIconClose();
  });

  it('should login incorrect ', () => {
    const userName = 'usuario1';
    const senha = '12364';
    inputText.setValue(userName);
    inputText.haveValue(userName);
    inputPassword.setValue(senha);
    inputPassword.haveValue(senha);
    cy.get(elements.login.btnSubmit).click();
    toaster.waitForToaster();
    toaster.waitForToasterTitle('User is invalid');
    toaster.waitForToasterDescription('User or password incorrect');
    toaster.waitForToasterIcon();
    toaster.waitForToasterIconClose();
  });

  it('should validate message error fields are required ', () => {
    inputText.eventBlur();
    inputText.waitForErrorMessage('required', ' Username is required ');
    inputPassword.eventBlur();
    inputPassword.waitForErrorMessage('required', ' Password is required ');
  });
});
