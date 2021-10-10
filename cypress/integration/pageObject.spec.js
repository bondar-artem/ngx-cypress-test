import { onMainPage } from "../support/common_pages/mainPage"

describe('pageObject test', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Main Page Object', () => {
        // onMainPage.clickOnSidebarSubsection('Forms', 'Form Layouts')
        // onMainPage.clickOnMainSidebarSection('Forms')
        // onMainPage.clickOnMainSidebarSection('Auth')
        // onMainPage.clickOnSidebarSubsection('Layout', 'Stepper')
        onMainPage.selectBackgroundColor('Dark')
    })

    
})