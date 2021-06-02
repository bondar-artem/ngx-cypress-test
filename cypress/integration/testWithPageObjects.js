import {navigateTo} from "../support/page_objects/navigationPage";
import {onFormLayoutPage} from "../support/page_objects/formLayoutPage";

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
  })
})
