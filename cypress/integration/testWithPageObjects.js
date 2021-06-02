import {navigateTo} from "../support/page_objects/navigationPage";

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
})
