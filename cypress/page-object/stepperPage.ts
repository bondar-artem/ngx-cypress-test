class StepperPage {

    elements={
        inputField : () => cy.get('input.form-control'),
        submitBtn : () => cy.get('.step-container > button[type="submit"]')
    }

    fillField(value :string)
    {
        this.elements.inputField().type(value)
    }

    validatePlaceholderInField(placeholderText :string)
    {
        this.elements.inputField()
        .invoke('prop', 'placeholder')
        .should('eq', placeholderText)
    }

    clickSubmit()
    {
        this.elements.submitBtn().click()
    }
}
export default new StepperPage()