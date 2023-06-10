import HeaderMainPage from "../page-object/headerMainPage"

describe('Test navigation menu', () => {

    beforeEach('visit main page', () => {
        cy.visit('/')
    })

    it('should be expanded by default 1000x660', () => {
        cy.get('.compacted').should('be.visible')
        HeaderMainPage.clickSlideBarToggle()
        cy.get('.expanded').should('be.visible')
    })
})