import stepperPage from '../page-object/stepperPage'


describe('Test stepper page', () => {

    beforeEach('visit stepper page', () => {
        cy.visit('/pages/layout/stepper')
    })

    it('should compleate wizzard', () => {
        stepperPage.validatePlaceholderInField('Enter your name')
        stepperPage.fillField('Name')
        stepperPage.clickSubmit()

        stepperPage.validatePlaceholderInField('Enter favorite movie')
        stepperPage.fillField('Movie')
        stepperPage.clickSubmit()

        stepperPage.validatePlaceholderInField('Enter something')
        stepperPage.fillField('Something')
        stepperPage.clickSubmit()

        cy.contains('Wizard completed!')
        cy.contains('Try again')
    })
})