/// <reference types="cypress" />

describe('Interaction with Web Elements', ()=>{

  it('Saving and working with subject', ()=>{
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // SAVING SUBJECT OF THE COMMAND
    // approach #1 - Alias: can be used as a global variable within one test suite
    cy.contains('nb-card', 'Using the Grid').as('usingGrid')
    cy.get('@usingGrid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.get('@usingGrid').find('[for="inputPassword2"]').should('contain', 'Password')

    // approach #2 - then() method can me using within one method
    cy.contains('nb-card', 'Using the Grid').then(usingGrid =>{
      cy.wrap(usingGrid).find('[for="inputEmail1"]').should('contain', 'Email')
      cy.wrap(usingGrid).find('[for="inputPassword2"]').should('contain', 'Password')
    })
  })

  it.only('Extracting text values', ()=> {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // #1
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    // #2 jQuery element
    cy.get('[for="exampleInputEmail1"]').then(label => {
      const labelText = label.text()
      expect(labelText).to.eq('Email address')
    })

    // #3 Invoke text from element
    cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain', 'Email address')

    // #4 Invoke attr value from element
    cy.get('[for="exampleInputEmail1"]').invoke('attr','class').then(classValue => {
      expect(classValue).to.eq('label')
    })

    // #5 - Find hidden input value in the properties of the element to validate
    cy.get('#exampleInputEmail1').type('text.com')
    cy.get('#exampleInputEmail1').invoke('prop','value').should('contain','text.com')
  })
})
