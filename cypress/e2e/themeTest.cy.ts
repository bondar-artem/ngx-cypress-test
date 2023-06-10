import HeaderMainPage from "../page-object/headerMainPage"

describe('Test theme change', () => {

    beforeEach('visit main page', () => {
        cy.visit('/')
    })

    it('should have default theme', () => {
        HeaderMainPage.elements.selectThemeButton()
        .contains('Light')
        HeaderMainPage.checkSelectedDefaultTheme()
    })

    it('should change to dark', () => {
        HeaderMainPage.clickSelectTheme()
        HeaderMainPage.selectThemeFromTheList('Dark')
        HeaderMainPage.checkSelectedDarkTheme()
    })

    it('should change to cosmic', () => {
        HeaderMainPage.clickSelectTheme()
        HeaderMainPage.selectThemeFromTheList('Cosmic')
        HeaderMainPage.checkSelectedCosmicTheme()
    })

    it('should change to corporate', () => {
        HeaderMainPage.clickSelectTheme()
        HeaderMainPage.selectThemeFromTheList('Corporate')
        HeaderMainPage.checkSelectedCorporateTheme()
    })
})