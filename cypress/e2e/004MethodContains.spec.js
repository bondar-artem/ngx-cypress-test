/// <reference types="cypress" />

// The Contains method finds HTML text byt text and locator
// This method only finds the first text matched in case exist more than one
describe('Method Contains', () => {

 it('Testing the Contains method', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.contains('Sign in') // there is two matches into the page
    cy.contains('[status="warning"]', 'Sign in') // The second match can be found using an attribute

  })

})


