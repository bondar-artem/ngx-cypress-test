/// <reference types="cypress" />

describe("Second regression suite", () => {
  it("Regression test 1", () => {
    cy.visit("http://localhost:4200/pages");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("nb-card-header", "Horizontal form").should("be.visible");
  });
});
