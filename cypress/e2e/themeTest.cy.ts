describe('Test theme change', () => {

    beforeEach('visit main page', () => {
        cy.visit('/')
    })

    it('should have default theme', () => {
       
        cy.get('.select-button')
        .contains('Light')
        cy.get('body')
        .should('have.class', 'nb-theme-default')
    })

    it('should change to dark', () => {
        cy.get('.select-button').click()
        cy.get('.options-list-container')
        .contains('Dark')
        .click()
        cy.get('body')
        .should('have.class', 'nb-theme-dark')
    })

    it('should change to cosmic', () => {
        cy.get('.select-button').click()
        cy.get('.options-list-container')
        .contains('Cosmic')
        .click()
        cy.get('body')
        .should('have.class', 'nb-theme-cosmic')
    })

    it('should change to corporate', () => {
        cy.get('.select-button').click()
        cy.get('.options-list-container')
        .contains('Corporate')
        .click()
        cy.get('body')
        .should('have.class', 'nb-theme-corporate')
    })

})