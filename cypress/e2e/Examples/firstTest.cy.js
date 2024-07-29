/// <reference types="cypress" />

describe("Website Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#user-name").should("be.visible").type("standard_user");
    cy.get("#password").should("be.visible").type("secret_sauce");
  });

  it("Visit the website and login with valid credentials", () => {
    //cy.visit('/')
    //cy.get('#user-name').should('be.visible').type('standard_user')
    //cy.get('#password').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').should("be.visible").click();
    cy.url().should("include", "/inventory.html");
    cy.contains("Products");
  });
  it("Visit the website and add a product to your cart", () => {
    cy.get('[data-test="login-button"]').should("be.visible").click();
    cy.url().should("include", "/inventory.html");
    cy.contains("Products");
    cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible").click();
    cy.get(".shopping_cart_badge").contains("1");
    cy.get(".shopping_cart_link").should("be.visible").click();
    cy.url().should("include", "/cart.html");
    cy.get(".inventory_item_name")
      .contains("Sauce Labs Backpack")
      .should("be.visible");
  });

  //it('Visit the website and login with invalid credentials', () => {
  //cy.get('#user-name').should('be.visible').type('standard')
  //cy.get('#password').should('be.visible').type('secret_sauce')
  //cy.get('[data-test="login-button"]').should('be.visible').click()
  //cy.get('.error-message-container.error').should('be.visible')
  //cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
});
