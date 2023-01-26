import { navigateTo } from "../support/page_objects/navigationPage";

describe('Test with Page Objects', () => {

  // working before each test
  beforeEach('open application', () => {
    cy.visit('/')
  })

  it('verify navigations across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
    navigateTo.toastrPage()
  });

})
