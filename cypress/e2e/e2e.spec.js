
import NavigationPage from "../support/page_objects/navigation.page";
import { onFormLayoutsPage } from "../support/page_objects/formLayouts.page";
const navigateTo = new NavigationPage()

describe('End-to-End - Submit Inline Form', ()=> {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Submit Inline Form', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('Oleksandr', 'test@test.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', '123Pass')
  })
})
