/// <reference types="cypress" />

describe('Our first suite', () => {

  it('first test', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //by Tag Name
    cy.get('input')

    //by ID
    cy.get('#inputEmail')

    //by Class Name
    cy.get('.input-full-width')

    //by Attribute Name
    cy.get('[placeholder]')

    //by Attribute name and value
    cy.get('[placeholder="Email"]')

    //by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]')

    //by Two different Attributes
    cy.get('[placeholder="Email"][type="email"]')

    //by tag name, Attribute with value, ID and Class Name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width')

  })

})
