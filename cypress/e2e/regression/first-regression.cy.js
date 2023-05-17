/// <reference types="cypress" />

describe('First regression suite', () => {
  it('Regression test 1', () => {
    cy.visit(Cypress.env('baseUrl')+'pages')
    cy.contains('Layout').click()
    cy.contains('Stepper').click()
    cy.get('h3.ng-star-inserted').should('have.length',2).and('be.visible')
  });
});