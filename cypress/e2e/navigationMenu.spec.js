/// <reference types="cypress" />

import NavigationPage from "../support/page_objects/navigation.page";
import navigationMenu from "../support/static/navigation";
const navigateTo = new NavigationPage()

describe('Validate Navigation Menu', ()=>{
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Navigate to pages',()=>{
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.toastrPage()
    navigateTo.smartTablePage()
  })

  // Loop through all menu items
  Object.values(navigationMenu).forEach(groupMenu=>{
    Object.values(groupMenu.options).forEach(menuOption =>{
      it(`Select ${groupMenu.name} -> ${menuOption}`,()=>{
        navigateTo.selectGroupMenuItem(groupMenu.name)
        cy.contains(menuOption).click()
      })
    })
  })
})
