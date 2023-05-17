/// <reference types="cypress" />

const cypress = require("cypress");

describe("First smoke suite", () => {
  it("Smoke test", () => {
    cy.visit(Cypress.env("baseUrl") + "/pages");
    cy.contains("Layout").click();
    cy.contains("Stepper").click();
    cy.get("h3.ng-star-inserted").should("have.length", 2).and("be.visible");
    cypress.log(Cypress.env("myPhrase"));
    // cypress.log(Cypress.env('user'))
    // cypress.log(Cypress.env('password'))
  });
});
