export class BasePage {
    constructor(url) {
        this._url=url
    }
    navigate(){
        cy.visit(this._url)
        cy.url().should('contain', this._url)
    }
}