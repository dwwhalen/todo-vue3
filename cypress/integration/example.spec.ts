// https://docs.cypress.io/api/introduction/api.html

describe("Adding a Todo", () => {
  it("visits the app root url", () => {
    cy.visit("/");
  });

  it.only('my new recorded test is fresh', function () {
    cy.eyesOpen({
      appName: 'Demo App',
      testName: 'Adding a Todo',
    })

    cy.visit('/');

    cy.get("[data-test-id='page-title']")
      .should('have.text', 'Let\'s do some thangs!');

    cy.eyesCheckWindow({
      tag: "Todo Window Before Adding",
      target: 'window',
      fully: true
    });

    cy.get("[data-test-id='new-todo']")
      .clear();

    cy.get("[data-test-id='new-todo']")
      .type('Cut the grass');

    cy.get("[data-test-id='add-button']")
      .click();

    cy.get("[data-test-id='todo-item']").last()
      .should('have.text', 'Cut the grass');

    cy.eyesCheckWindow({
      tag: "Todo Window After Adding",
      target: 'window',
      fully: true
    });

    cy.eyesClose()

  });

});
