// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
  });

  it('my new recorded test is fresh', function () {
    cy.visit('/');

    cy.get("[data-test-id='page-title']")
      .should('have.text', 'Let\'s do some thangs!');

    cy.get("[data-test-id='new-todo']")
      .clear();

    cy.get("[data-test-id='new-todo']")
      .type('Cut the grass');

    cy.get("[data-test-id='add-button']")
      .click();

    cy.get("[data-test-id='todo-item']").last()
      .should('have.text', 'Cut the grass');
  });
});
