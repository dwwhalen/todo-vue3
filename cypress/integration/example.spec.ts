// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('my new recorded test is fresh', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('input').clear();
    cy.get('input').type('Cut the grass');
    cy.get('form > button').click();
    cy.get(':nth-child(1) > span').click();
    cy.get('.done').click();
    cy.get('#app').click();
    cy.get(':nth-child(2) > span').should('have.text', 'Cut the grass');
    cy.get('h1').should('have.text', 'Let\'s do some thangs!');
    /* ==== End Cypress Studio ==== */
  });
});
