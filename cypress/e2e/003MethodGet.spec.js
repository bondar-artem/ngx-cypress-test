/// <reference types="cypress" />


describe('Finding element', () => {

  it('Finding elements', () => {

    cy.visit('/') // Navigate to the web application

    cy.contains('Forms').click()  // Find element  by text and click on it

    cy.contains('Form Layouts').click()

    cy.get('input') // By Tag Name. "input" is the name of the tag

    cy.get('#inputEmail') // By ID. "inputEmail", is id and has to start with "#"

    cy.get('.input-full-width') // By Class value. "input-full-width" is the class value and has to start with "."

    cy.get('[fullwidth]') //By attribute name."fullwidth" is the attribute name and has to be between square braces

    cy.get('[placeholder="Email"]') // By attribute and value.

    cy.get('[class="input-full-width size-medium shape-rectangle"]')  // By entire class value. has to be between square braces

    cy.get('[placeholder="Email"][fullwidth]') // By two Attributes

    cy.get('input[placeholder="Email"]#inputEmail.input-full-width') // By tag, attribute id and class

    cy.get('[data-cy="imputEmail1"]') // By cypress test ID

  })

})


//The get method finds elements on the page by locator globaly. It means thet it will find all elements on the page aways.

describe('Method Get', () => {

  it('Testing the Get Method', () => {
     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Form Layouts').click()

     cy.contains('nb-card', 'Horizontal form'). get('button')

   })

 })
