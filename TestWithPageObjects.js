import { ondatePickerPage } from "../support/page_objects/datePickerPage"
import { onformLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { pleaseNavigateTo } from "../support/page_objects/navigationPage"
import { onsmartTablePage } from "../support/page_objects/smartTablePage"


describe ('Test with Page Objects', () => {

    beforeEach ('Open Application', () => {
        cy.openHomePage()
    })

    it ('Verify Naviagation Across the Pages', () => {
        pleaseNavigateTo.formLayoutsPage ()
        pleaseNavigateTo.datepickerPage ()
        pleaseNavigateTo.smartTablePage ()
        pleaseNavigateTo.toasterPage ()
        pleaseNavigateTo.tooltipPage ()
    })

    it ('All forms on Form Layouts Page', () => {
        pleaseNavigateTo.formLayoutsPage ()
        onformLayoutsPage.submitInlineFormWithNameAndEmail('Tester', 'Test@tester.com')
        onformLayoutsPage.submitBasicFormWithEmailandPassword ('Tester@tester.com', 'Passwords')
        onformLayoutsPage.signInUsingTheGridForm ('Tester@tester.com', 'Password')
        onformLayoutsPage.sendFormWithoutLabels ('Who is the Recipient', 'What is the Subject', 'Whatever message')
        onformLayoutsPage.submitBlockForm ('Younas', 'Habib', 'testers@check.com', 'www.google.com')
        onformLayoutsPage.signInHorizintalForm('abc@gmail.com', 'Password1!')

    })

    it ('Select Date from DatePicker Page', () => {
        pleaseNavigateTo.datepickerPage ()
        ondatePickerPage.selectDayFromCurrentDay(1)
        ondatePickerPage.selectDatePickerRange (7,14)
    })

    it ('Smart Tables', () => {

        pleaseNavigateTo.smartTablePage ()
        onsmartTablePage.updateAgeByFirstName('Mark','28')
        onsmartTablePage.addRowIntoTable('123','Younas', 'Habib', 'abc@test.com', '23')
        onsmartTablePage.deleteRowsFromTable(1)
    })
})