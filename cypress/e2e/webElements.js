/// <reference types="cypress" />

describe('Interaction with Web Elements', ()=>{

  context('Form Layouts page', ()=>{
    beforeEach('Go to Form Layouts',()=> {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()
    })

    it('Saving and working with subject', ()=>{
      // SAVING SUBJECT OF THE COMMAND
      // approach #1 - Alias: can be used as a global variable within one test suite
      cy.contains('nb-card', 'Using the Grid').as('usingGrid')
      cy.get('@usingGrid').find('[for="inputEmail1"]').should('contain', 'Email')
      cy.get('@usingGrid').find('[for="inputPassword2"]').should('contain', 'Password')

      // approach #2 - then() method can me using within one method
      cy.contains('nb-card', 'Using the Grid').then(usingGrid =>{
        cy.wrap(usingGrid).find('[for="inputEmail1"]').should('contain', 'Email')
        cy.wrap(usingGrid).find('[for="inputPassword2"]').should('contain', 'Password')
      })
    })

    it('Extracting text values', ()=> {
      // #1
      cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

      // #2 jQuery element
      cy.get('[for="exampleInputEmail1"]').then(label => {
        const labelText = label.text()
        expect(labelText).to.eq('Email address')
      })

      // #3 Invoke text from element
      cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain', 'Email address')

      // #4 Invoke attr value from element
      cy.get('[for="exampleInputEmail1"]').invoke('attr','class').then(classValue => {
        expect(classValue).to.eq('label')
      })

      // #5 - Find hidden input value in the properties of the element to validate
      cy.get('#exampleInputEmail1').type('text.com')
      cy.get('#exampleInputEmail1').invoke('prop','value').should('contain','text.com')
    })

    it('Radio buttons', ()=> {

      cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
        cy.wrap(radioButtons).eq(0).check({force: true}).should("be.checked")
        cy.wrap(radioButtons).eq(1).check({force: true}).should("be.checked")
        cy.wrap(radioButtons).eq(0).should("not.be.checked")
        cy.wrap(radioButtons).eq(2).should("be.disabled")
      })
    })
  })


  context('Toastr page', ()=> {

    beforeEach('Go to Toastr page', () => {
      cy.visit('/')
      cy.contains('Modal & Overlays').click()
      cy.contains('Toastr').click()
    })

    it('Check boxes', () => {
      cy.get('[type="checkbox"]').check({force: true}) //if 3 elements found, it will check all checkboxes found

      // CLICK vs CHECK.
      // "Click" will click on checkbox no matter it is checked or not
      // "Check" performs validation of element(checkbox) status and check it if it is unchecked. If checked it will keep it checked
      cy.get('[type="checkbox"]').eq(0).click({force: true})
      cy.get('[type="checkbox"]').eq(1).check({force: true})

    })


    context('Datepicker page', ()=> {

      beforeEach('Go to Datepicker page', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
      })

      it('Datepicker', () => {

        function selectFutureDate(days){
          let date = new Date()
          date.setDate(date.getDate() + days)
          let futureDate = date.getDate()
          let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
          let futureYear = date.getFullYear()
          let assertDate = `${futureMonth} ${futureDate}, ${futureYear}`

          cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
            if(!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)){
              cy.get('[data-name="chevron-right"]').click()
              selectFutureDate(days)
            }else{
              cy.get('.day-cell').not('.bounding-month').contains(futureDate).click() //select day from active month only
            }
          })
          return assertDate
        }

        // Test
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input=>{
          cy.wrap(input).click()
          const dateToAssert = selectFutureDate(300)
          cy.wrap(input).should('have.value', dateToAssert)
        })
      })
    })
  })

})
