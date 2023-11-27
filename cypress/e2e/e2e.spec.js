import NavigationPage from "../support/page_objects/navigation.page";
import { onFormLayoutsPage } from "../support/page_objects/formLayouts.page";
import {onDatePickerPage} from "../support/page_objects/datepicker.page";
import {onSmartTablePage} from "../support/page_objects/smartTable.page";
const navigateTo = new NavigationPage()

describe('End-to-End', ()=> {
  beforeEach(() => {
    cy.openHomePage()
  })

  it('Submit Inline and Basic Form', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('Oleksandr', 'test@test.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', '123Pass')
  })

  it('Select Date in Common Datepicker and Datepicker with Range', () => {
    navigateTo.datePickerPage()
    onDatePickerPage.selectCommonDatepickerDateFromToday(5)
    onDatePickerPage.selectDatepickerWithRangeFromToday(2,10)
  })

  it('Add, update and delete record', () => {
    navigateTo.smartTablePage()
    onSmartTablePage.addNewRecord(777, 'Oleksandr', 'Ostapchuk', 'ost','test@test.com', 100)
    onSmartTablePage.updateAgeByFirstName(77, 'Oleksandr')
    onSmartTablePage.deleteRecordById(777)
  })
})
