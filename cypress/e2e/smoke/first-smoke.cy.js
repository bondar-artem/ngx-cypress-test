/// <reference types="cypress" />

describe('First smoke suite', () => {
  it('Smoke test', () => {
    cy.visit('http://localhost:4200/pages')
    cy.contains('Layout').click()
    cy.contains('Stepper').click()
    cy.get('h3.ng-star-inserted').should('have.length',2).and('be.visible')
  });
});