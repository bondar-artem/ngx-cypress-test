/// <reference types="cypress" />

describe("Second smoke suite", () => {
  it("Smoke test", () => {
    cy.visit( Cypress.env('baseUrl')+"/pages")
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("nb-card-header", "Horizontal form").should("be.visible");
  });
});
