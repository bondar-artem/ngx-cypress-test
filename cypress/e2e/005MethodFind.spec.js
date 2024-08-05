/// <reference types="cypress" />

//The Find method is used to find child elements on HTML structure

describe('Method Find', () => {

  it('Testing the Find Method', () => {
     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Form Layouts').click()

     // Fisrt we need to find a parent  element, then the element itself
     cy.contains('nb-card', 'Horizontal form'). find('button')

   })

 })
