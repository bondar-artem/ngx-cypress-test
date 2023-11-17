import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onNavigationPage }  from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('POM first simple test', () => {
    beforeEach('openning main page', () => {
        cy.openHomePage()
    })

    it.only('Navigation accros the page', () => {
        //onNavigationPage.formLayoutsPage()
        onNavigationPage.formDatepickerPage()
        // onNavigationPage.smartTablePage()
        // onNavigationPage.toastrPage()
        // onNavigationPage.tooltipPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(100)
    

    })

    it('shoud submit Inline and Basic form and select tommorow date in calendar', () => {
        // onNavigationPage.formLayoutsPage()
        // onFormLayoutsPage.submitInlineFormWithNameAndEmail('Nika', 'tast@gmail.com')
        // onFormLayoutsPage.submitBasicFormWithEmailAndPassword('ozon@gmail.com', '123123')

        onNavigationPage.formDatepickerPage()

        // onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        // onDatePickerPage.selectDatepickerWithRangeFromToday(5, 10)
        onDatePickerPage.selectDatepickerWithDisabledMonMaxValue(3)

        
        // onNavigationPage.smartTablePage()
        // onSmartTablePage.addNewrecordWithFirstAndLastName('Mary', 'Gu')
        // onSmartTablePage.updateAgeByName('Mary', '45')
        // onSmartTablePage.deleteRowByIndex(2)

        

        

    })


})

