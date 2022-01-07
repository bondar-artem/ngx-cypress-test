/// <reference types = "cypress" />

describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");

    //by tag name
    cy.get("input")

    //by iD
    cy.get("inputEmail1")

    //by class
    cy.get(".input-full-width")

    //by attribute
    cy.get("[placeholder]");

    //by atribute and value
    cy.get('[placeholder="Email"]')
    //by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    //by tag name and atribute wiht value

    cy.get('input[placeholder="Email"]');
  });
});
