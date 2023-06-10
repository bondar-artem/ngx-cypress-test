class NavigationPage {

    elements={
        menuItem : () => cy.get('.menu-items'),
        menuTitle : () => cy.get('.menu-title')
    }

    selectMenuItem(menuItem: string) {
        this.elements.menuItem().contains(menuItem).click()
    }

    selectSubMenuItem(subMenu: string) {
        this.elements.menuTitle().contains(subMenu).click()
    }

    validateCurrentUrl(url: string) {
        cy.url().should('include', url)
    }
}
export default new NavigationPage()