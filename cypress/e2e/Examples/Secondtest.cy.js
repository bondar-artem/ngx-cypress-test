/// <reference types="cypress" />

describe("Chapter 2", () => {
  it("Xpath test", () => {
    cy.visit("/");
    cy.xpath('//input[@placeholder="Username"]').type("standard_user");
    cy.xpath('//input[@placeholder="Password"]').type("secret_sauce");
    cy.xpath('//input[@type="submit"]').click();
  });
});

describe("Commands", () => {
  it("Cypress commands", () => {
    cy.visit("/");
    cy.LoginForm("standard_user", "secret_sauce");
  });
});

describe("Fixtures", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("credentials.json").as("credentials");
  });

  it("Cypress Fixtures", function () {
    const credentials = this.credentials;
    cy.get("#user-name").type(credentials.username);
    cy.get("#password").type(credentials.password);
  });
});

describe("Aliases", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("add one product to the cart", function () {
    cy.LoginForm("standard_user", "secret_sauce");
    cy.get(".inventory_item").first().as("item");
    cy.get("@item").find(".btn_primary").should("be.visible").click();
    cy.get(".inventory_item").last().as("item");
    cy.get("@item").find(".btn_primary").should("be.visible").click();
  });

  it("add three product to the cart", function () {
    cy.LoginForm("standard_user", "secret_sauce");
    cy.get(".inventory_item")
      .eq(2)
      .as("firstproduct")
      .find(".btn_primary")
      .click();
    cy.get(".inventory_item")
      .eq(3)
      .as("secondproduct")
      .find(".btn_primary")
      .click();
    cy.get(".inventory_item")
      .eq(4)
      .as("thirdproduct")
      .find(".btn_primary")
      .click();
    cy.get(".inventory_item")
      .contains("Sauce Labs Bike Light")
      .should("be.visible");
  });

  it("add multiple product method", function () {
    cy.LoginForm("standard_user", "secret_sauce");
    cy.get(".inventory_item").as("products");
    cy.get("@products").each(($el, index) => {
      if (index < 2) cy.wrap($el).find(".btn_primary").click();
    });
  });
});
