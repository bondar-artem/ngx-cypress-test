class HeaderMainPage {

    elements={
        selectThemeButton : () => cy.get('.select-button'),
        themeOptionsList : () => cy.get('.options-list-container'),
        defaultTheme : () => cy.get('.nb-theme-default'),
        darkTheme: () => cy.get('.nb-theme-dark'),
        cosmicTheme: () => cy.get('.nb-theme-cosmic'),
        corporateTheme: () => cy.get('.nb-theme-corporate'),
        slideBar: () => cy.get('.sidebar-toggle')
    }

    clickSelectTheme()
    {
        this.elements.selectThemeButton().click()
    }

    selectThemeFromTheList(theme: string)
    {
        this.elements.themeOptionsList()
        .contains(theme)
        .click()
    }

    checkSelectedDefaultTheme()
    {
        this.elements.defaultTheme().should('be.visible')
    }

    checkSelectedDarkTheme()
    {
        this.elements.darkTheme().should('be.visible')
    }

    checkSelectedCosmicTheme()
    {
        this.elements.cosmicTheme().should('be.visible')
    }

    checkSelectedCorporateTheme()
    {
        this.elements.corporateTheme().should('be.visible')
    }

    clickSlideBarToggle()
    {
        this.elements.slideBar().click()
    }
}
export default new HeaderMainPage()