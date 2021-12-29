/// <reference types = "Cypress"/>

describe("Test Suit", () => {
    before(() => {
        cy.viewport(1366,768)
    })
    it("test spec 01", () => {
        cy.visit("http://localhost:4200/pages")
        cy.contains("Forms").click()
    })
})