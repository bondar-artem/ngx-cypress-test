/// <reference types="cypress" />

const exp = require("constants")

describe('Alias using', () => {
    describe('Suite section 1', () => {
        beforeEach(() => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    })

    it('Basic form field Label Password', () => {
     
    cy.contains('nb-card', 'Basic form').as('basicForm')
    cy.get('@basicForm').find('[for="exampleInputPassword1"]').should('contain', 'Password')
   
    })

    it('THEN method using in Basic form', () => {

    })
  })
})