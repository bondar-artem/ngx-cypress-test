/// <reference types="cypress" />

describe('CSS intro', ()=>{
  beforeEach(()=>{
    cy.visit('/pages/forms/layouts')
  })

  it('selectors example', ()=>{
    cy.get('button')                  // за тегом
    cy.get('div.form-group.row')          // за класом
    cy.get('body div input ')          // за класом
    cy.get('#inputEmail')             // за id
    // cy.get('button.status-danger')    // за тегом з класом
    // cy.get('div button')              
    // cy.get('div>button')              
    // cy.get('form input:nth-child(2)')              
    // cy.get('form input[type="text"]')              
    // cy.get('form input:not([type="text"])')              
    // cy.get('a[href^="https:"]')              
  })
  // it('cypress helpers', () => {
  //   cy.get('button').eq(0)
  //   cy.get('button').first()
  //   cy.get('button').last()
  //   cy.get('form').find('.status-danger')
  //   cy.contains('Submit')
  //   cy.contains('button','Submit')
  //   cy.get('button', {timeout: 10000})     
  //   cy.contains('nb-card form', 'Sign in').last().within(() => {
  //     cy.get('input').eq(0).type('Hello')
  //     cy.get('input').eq(1).type('test')
  //   })
  // })
})