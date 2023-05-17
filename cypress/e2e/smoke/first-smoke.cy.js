/// <reference types="cypress" />
describe("First smoke suite", () => {
  it("Smoke test", () => {
    cy.visit(Cypress.env("baseUrl") + "/pages");
    cy.contains("Layout").click();
    cy.contains("Stepper").click();
    cy.get("h3.ng-star-inserted").should("have.length", 2).and("be.visible");
    cy.log(Cypress.env("myPhrase"));
    cy.log(Cypress.env("user"));
    cy.log(Cypress.env("password"));
  });
});
