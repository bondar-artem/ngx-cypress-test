
describe("Stepper page", () => {

    it("should find text on the page", () => {
        cy.visit("pages/layout/stepper")

        cy.get('nb-stepper[orientation="horizontal"] h3').as("stepperTitle")
        cy.get('nb-stepper[orientation="horizontal"] button').last().as("nextButton")

        cy.get('@stepperTitle').should('have.text', "Step content #1")
        cy.get("@nextButton").click()

        cy.get('@stepperTitle').should('have.text', "Step content #2")
        cy.get('@nextButton').click()
        
        cy.get('@stepperTitle').should('have.text', "Step content #3")
        cy.get('@nextButton').click()

        cy.get('@stepperTitle').should('have.text', "Step content #4")
        cy.get('@nextButton').should('be.disabled')
    });
});