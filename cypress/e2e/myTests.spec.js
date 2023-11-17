/// <reference types="cypress" />

const exp = require("constants")

describe('Alias using', () => {
    describe('Suite section 1', () => {
        beforeEach(() => {

     cy.visit('/')
     cy.contains('Forms').click()
     cy.contains('Form Layouts').click()
    })

    it('Basic form field Label Password', () => {
     
    cy.contains('nb-card', 'Basic form').as('basicForm')
    cy.get('@basicForm').find('[for="exampleInputPassword1"]').should('contain', 'Password')
   
    })
//EXTRACTING

    it('THEN method using in Basic form', () => {
      cy.contains('nb-card', 'Basic form').then(usingBasicForm => {
      cy.wrap(usingBasicForm).find('[type="submit"]').should('contain', 'Submit')
      })
    })

    it('Using contain, shoul on Using thre Grid form', () => {
      cy.contains('nb-card', 'Using the Grid').should('contain', 'Option 1')

      //THEN method
      cy.contains('nb-card', 'Using the Grid').find('[type="submit"]').then(usingGrid => {
        const textUsingGrid = usingGrid.text()//JQUERY
        expect(textUsingGrid).to.equal('Sign in')
      })
      cy.contains('nb-card', 'Using the Grid').find('[class="form-group row"]').then(usingGrid => {
        const cyprGridText = usingGrid.text()//cypress method
        cy.wrap(cyprGridText).should('contain', 'Radios')
    })
    
      //INVOKE
      cy.contains('[class="text"]', 'Check me out').invoke('text').then(checkboxText => {//JQuery
        expect(checkboxText).to.equal('Check me out')

      cy.wrap(checkboxText).should('contain', 'Check me out')//wrap to Cypress

      cy.contains('[class="text"]', 'Check me out').invoke('text').should('contain', 'Check me out')//cypress
        
      })
  })
    
   it('Suite 2 using invoke attr, prop', () => {

        //ATTRIBUTE
      cy.get('ngx-form-layouts').invoke('attr', 'class').then(classValue => {
        expect(classValue).to.equal('ng-star-inserted')
      })
      //PROPERTY
      cy.get('[data-cy="imputEmail1"]').type('more@mail.com')
      cy.get('[data-cy="imputEmail1"]').invoke('prop', 'value').should('contain', 'more@mail.com')

      cy.get('[data-cy="imputEmail1"]').invoke('prop', 'value').then(propValue => {
        expect(propValue).to.equal('more@mail.com')
      })
   })

    it('Suite 3 RADIOBUTTONS', () => {
      //RADIOBUTTON (type - radio)
      cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButton => {
        cy.wrap(radioButton).eq(0).check({force: true}).should('be.checked')

        cy.wrap(radioButton).eq(1).check({force: true}).should('be.checked')
        cy.wrap(radioButton).eq(0).should('not.be.checked')
        cy.wrap(radioButton).eq(2).should('be.disabled')
      })
      })
    })
})

//checkbox - should be applied in INPUT and type - checkbox
describe('Page Modal & Overlays', () => {
  it('Checkbox testing', () => {
    cy.visit('/')
     cy.contains('Modal & Overlays').click()
     cy.contains('Toastr').click()

     //cy.get('[type="checkbox"]').uncheck({force: true})//click on all checkboxes, and makes them checked, and with uncheck - unchecked
     
     cy.get('[type="checkbox"]').eq(0).click({force: true})//click changes initial status

     cy.get('[type="checkbox"]').eq(1).check({force: true})
     
  })
})

describe('30 Tooltips (), dialog box', () => {
  it('Dialog box testing (hover-over)', () => {
    cy.visit('/')
     cy.contains('Modal & Overlays').click()
     cy.contains('Dialog').click()

     cy.contains('nb-card', 'Open Dialog')
     cy.contains('Open Dialog with component').click()

     cy.get('nb-card').should('contain', 'This is a title passed to the dialog component')

     cy.get('nb-card-footer')
     cy.contains('button', 'Dismiss Dialog').click()

     cy.get('nb-card').should('not.contain', 'This is a title passed to the dialog component')
     
  })
  it('Tooltip', () => {
    cy.visit('/')
     cy.contains('Modal & Overlays').click()
     cy.contains('Tooltip').click()

     cy.contains('nb-card', 'Tooltip Placements')
     cy.contains('Top').click()

     cy.get('nb-tooltip').should('contain', 'This is a tooltip')
  })

  it.only('Dialod window woth STUB method',() => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    const stub = cy.stub()

    cy.on('window:confirm', stub)
    cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    })
    })
  
 
  })


     