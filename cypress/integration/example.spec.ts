// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Let's do some thangs!");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('recorded-tests', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('input').clear();
    cy.get('input').type('some new todo');
    cy.get('form > button').click();
    cy.get(':nth-child(2) > span').click();
    cy.get('.done').click();
    cy.get(':nth-child(2) > span').should('have.text', 'some new todo');
    cy.get('ul > :nth-child(2) > button').click();
    cy.get('span').click();
    cy.get('.done').click();
    cy.get('span').click();
    cy.get('.done').click();
    /* ==== End Cypress Studio ==== */
  });
});
