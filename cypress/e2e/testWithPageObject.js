import { homePage } from "../support/page_objects/1.homePagecheck"
import { stepperPage } from "../support/page_objects/2.stepperPageCheck"
import { accordionPage } from "../support/page_objects/3.AccordionPageCheck"
import { onFormsLayoutsPage } from "../support/page_objects/4.FormsLayoutsPageCheck"
import { navigateToPage } from "../support/page_objects/navigationPage"

describe('Test with Page Object', () => {
    
    beforeEach('Open application', () => {
        cy.visit('/')
    })

    it('Verify home page', () => {
        homePage.HomePage()
    
       })

    it('Verify navigation accross pages', () => {
        navigateToPage.layoutPage()
        navigateToPage.formsPage()
        navigateToPage.modalOverlays()
        navigateToPage.extraComponents()
        navigateToPage.tablesData()
        navigateToPage.auth()
   })


    it('Verify stepper page', () => {
        stepperPage.StepperPage()
    })

    it('Verify accordion page', () => {
        accordionPage.AccordionPage()
    })

    it('Verify forms layouts page', () => {
        onFormsLayoutsPage.submitInlineFormWithNameAndEmail('Andrei', 'test@test.com')
        onFormsLayoutsPage.submitUsingTheGridWithEmailAndPassword('test@test.com', 'Test123')
        onFormsLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com','Password')
        onFormsLayoutsPage.submitFormWithoutLabelsRecipientsSubjectMessage('Tester', 'Test', 'Hello')
        onFormsLayoutsPage.submitBlockFormFirstNameLastNameEmailWebsite('John', 'Tester', 'john@email.com', 'www.localhost.com')
        onFormsLayoutsPage.submitHorizontalFormEmailPassword('test@test.com', 'Test123')

    })


})