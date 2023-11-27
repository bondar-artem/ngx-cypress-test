export class SmartTablePage{

  addNewRecord(id, firstName, lastName, username, email, age){
    cy.get('i.nb-plus').click()
    cy.get('thead tr').eq(2).then(addRow=>{
      cy.wrap(addRow).find('[placeholder="ID"]').type(id)
      cy.wrap(addRow).find('[placeholder="First Name"]').type(firstName)
      cy.wrap(addRow).find('[placeholder="Last Name"]').type(lastName)
      cy.wrap(addRow).find('[placeholder="Username"]').type(username)
      cy.wrap(addRow).find('[placeholder="E-mail"]').type(email)
      cy.wrap(addRow).find('[placeholder="Age"]').type(age)
      cy.wrap(addRow).find('.nb-checkmark').click()
    })
    //validate added record
    cy.get('tbody tr').first().find('td').then(tableColumns =>{
      cy.wrap(tableColumns).eq(1).should('contain',id)
      cy.wrap(tableColumns).eq(2).should('contain',firstName)
      cy.wrap(tableColumns).eq(3).should('contain',lastName)
      cy.wrap(tableColumns).eq(4).should('contain',username)
      cy.wrap(tableColumns).eq(5).should('contain',email)
      cy.wrap(tableColumns).eq(6).should('contain',age)
    })
  }

  updateAgeByFirstName(age, firstName){
    cy.get('tbody').contains('tr', firstName).then(editRow =>{
      cy.wrap(editRow).find('i.nb-edit').click()
      cy.wrap(editRow).find('[placeholder="Age"]').clear().type(age)
      cy.wrap(editRow).find('.nb-checkmark').click()
      cy.wrap(editRow).find('td').eq(6).should('contain',age)
    })
  }

  deleteRecordById(id){
    const stub = cy.stub()
    cy.on('window:confirm', stub)
    cy.get('tbody').contains('td', id).parent('tr').find('.nb-trash').click().then(()=> {
      expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    })
  }

}

export const onSmartTablePage = new SmartTablePage()
