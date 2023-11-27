export class FormLayoutsPage{

  submitInlineFormWithNameAndEmail(name, email){
    cy.contains('nb-card', 'Inline form').find('form').then(inlineForm =>{
      cy.wrap(inlineForm).find('[placeholder="Jane Doe"]').type(name)
      cy.wrap(inlineForm).find('[placeholder="Email"]').type(email)
      cy.wrap(inlineForm).find('[type="checkbox"]').check({force:true})
      cy.wrap(inlineForm).submit()
    })
  }

  submitBasicFormWithEmailAndPassword(email, password){
    cy.contains('nb-card', 'Basic form').find('form').then(basicForm =>{
      cy.wrap(basicForm).find('#exampleInputEmail1').type(email)
      cy.wrap(basicForm).find('#exampleInputPassword1').type(password)
      cy.wrap(basicForm).find('[type="checkbox"]').check({force:true})
      cy.wrap(basicForm).submit()
    })
  }

}

export const onFormLayoutsPage = new FormLayoutsPage()
