export class FormLayoutPage {

  submitInLineFormWithNameAndEmail(name, email) {
    cy.contains('nb-card', 'Inline form').find('form').then(form => {
      cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
      cy.wrap(form).find('[placeholder="Email"]').type(email)
      cy.wrap(form).find('[type="checkbox"]').check({force:true})
      // NOTE: submit() only for form
      cy.wrap(form).submit()
    })
  }
}

export const onFormLayoutPage = new FormLayoutPage()
