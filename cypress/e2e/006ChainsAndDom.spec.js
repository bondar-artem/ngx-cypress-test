/// <reference types="cypress" />



describe('Method Get', () => {

  it('Testing the Get Method', () => {
    cy.visit('/')

    cy.get('#inputEmail13')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()


   })

 })
