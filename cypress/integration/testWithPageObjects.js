import {navigateTo} from "../support/page_objects/navigationPage";
import {onFormLayoutPage} from "../support/page_objects/formLayoutPage";
import {onDatePickerPage} from "../support/page_objects/datepickerPage";

describe(' Test with Page Objects', () => {

  beforeEach('open application', () => {
    cy.visit('/')
  })

  it('verify navigation actions across the pages', () => {
    navigateTo.formLayoutPage()
    navigateTo.datePickerPage()
    navigateTo.smartTablePage()
    navigateTo.toasterPage()
    navigateTo.tooltipPage()
  })

  it.only(' should submit Inline + Basic form + select tomorrow date + date period + test SmartTable', () => {

    navigateTo.formLayoutPage()
    onFormLayoutPage.submitInLineFormWithNameAndEmail('Vladyslav QA', 'qa@test.com')
    onFormLayoutPage.submitBasicFormWithEmailAndPassword('qa@test.com', '12345678')
    navigateTo.datePickerPage()
    onDatePickerPage.selectCommonDatepickerDateFromToday(1)
    onDatePickerPage.selectDatepickerWithRangeFromToday(7, 20)

  })
})
