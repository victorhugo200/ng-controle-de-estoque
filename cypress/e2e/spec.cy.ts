describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('LOGIN');
    cy.contains('sandbox app is running!');
  });
});
