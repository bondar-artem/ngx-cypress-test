///<reference types="cypress" />

const { get } = require("cypress/types/lodash");

describe("Our first suite from TL", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //by TagName
    cy.get("input");

    //by ID
    cy.get("#inputEmail1");

    //ClassName
    cy.get(".input-full-width");

    cy.get("[placeholder]");

    cy.get("[placeholder=Email]");

    cy.get('[class ="input-full-width size-medium shape-rectangle"]');

    cy.get('input[placeholder = "Email"]');

    cy.get('[placeholder="Email"][type="email"]');

    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    cy.get('[data-cy="imputEmail1"]');
  });

  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signInButton"]');

    cy.contains("Sign in");

    cy.contains('[status="warning"]', "Sign in");

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in");
  });
});
