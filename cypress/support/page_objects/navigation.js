export class NavigationPage {

  toastrPage(){
    this.selectGroupMenuItem('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  smartTablePage(){
    this.selectGroupMenuItem('Tables & Data')
    cy.contains('Smart Table').click()
  }

  datePickerPage(){
    this.selectGroupMenuItem('Forms')
    cy.contains('Datepicker').click()
  }

  formLayoutsPage(){
    this.selectGroupMenuItem('Forms')
    cy.contains('Form Layouts').click()
  }

  selectGroupMenuItem(groupName){
    cy.contains('a', groupName).then(menu=>{
      cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
        if(attr.includes('left')){
          cy.wrap(menu).click()
        }
      })
    })
  }
}
module.exports = NavigationPage;


