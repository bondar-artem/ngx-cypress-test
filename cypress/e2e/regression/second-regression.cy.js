/// <reference types="cypress" />

describe("Second regression suite", () => {
  it("Regression test 1", () => {
    cy.visit( Cypress.env('baseUrl')+"/pages");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("nb-card-header", "Horizontal form").should("be.visible");
  });
});
