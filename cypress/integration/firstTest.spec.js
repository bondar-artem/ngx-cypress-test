///<reference types="cypress" />

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

    //AttributeName
    cy.get("[placeholder]");

    //AttributeNameAndValue
    cy.get('placeholder="Email"');

    //ClassValue
    cy.get('class="input-full-width size-medium shape-rectangle"');

    //Tag name and attribute with value
    cy.get('input[placeholder="Email"]');

    //by two diferent attributes
    cy.get('[placeholder="Email"][type="email"]');

    //by tag name, attribute with value, ID and Class name

    cy.get('input[placeholder="Email][#inputEmail1][.input-full-width]');

    //Najbolji nacin
    cy.get('data-cy="imputEmail1"');
  });
});
