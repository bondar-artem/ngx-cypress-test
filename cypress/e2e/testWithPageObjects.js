import { navigateTo } from "../support/page_objects/navigationPage";
import {onFormLayoutsPage} from "../support/page_objects/formLayoutsPage";
import {onDatePickerPage} from "../support/page_objects/datepickerPage";
import {onSmartTablePage} from "../support/page_objects/smartTablePage";

describe('Test with Page Objects', () => {

  // working before each test
  beforeEach('open application', () => {
    cy.openHomePage()
  })

  it('verify navigations across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
    navigateTo.toastrPage()
  });

  it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitInLineFormWithNameAndEmail('Artem', 'test@test.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
    navigateTo.datepickerPage()
    onDatePickerPage.selectCommonDatePickerDateFromToday(1)
    onDatePickerPage.selectCommonDatePickerWithRangeFromToday(7, 14)
    navigateTo.smartTablePage()
    onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
    onSmartTablePage.updateAgeByFirstName('Artem', 35)
    onSmartTablePage.deleteRowByIndex(1)
  })

})
