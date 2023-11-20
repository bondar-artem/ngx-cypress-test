/// <reference types="cypress" />

describe('Xpath intro', ()=>{
  beforeEach(()=>{
    cy.visit('/pages/forms/layouts')
  })

  it('selectors example', ()=>{
    // cy.xpath('/html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-form-elements/ngx-form-layouts/div[2]/div[1]/nb-card[1]/nb-card-body/form/div[4]/div/button')
    // cy.xpath("//button[@status='primary']").eq(0).click()
    cy.xpath('//input[@placeholder="Jane Doe"]').type('Hello')
    cy.xpath('//input[@type="text" and @placeholder="Email"]').type('world')
    // cy.xpath('//button[@status="primary" or @type="submit"]').click()
    cy.xpath('//button[text()="Send"]').click()
    // cy.xpath('//div[not(@id)]')
  })
})