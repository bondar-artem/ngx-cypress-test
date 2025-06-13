/// <reference types="cypress" />

//const { should } = require("chai")

//const cypress = require("cypress")

// use either of keywords describe or keyword context defined the test suite

describe('First test suite', () => {
    it('first test', () => {
            
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // Find web element by Tag name
    cy.get('input')

    // Find web element by ID
    cy.get('#inputEmail1')

    // Find web element by Class value
    cy.get('.input-full-width') // find single value from class -> start with .

    // Find web element by Artribute name
    cy.get('[fullwidth]')

    // Find web element by Artribute and value
    cy.get('[placeholder="Email"]')

    // Find web element by entire value
    cy.get('[class="input-full-width size-medium shape-rectangle"]') // find entire value from class -> start with []

    // Find web element by two artributes 
    cy.get('[placeholder="Email"][fullwidth]')

    // Find web element by tag, id, class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    // Find web element by cypress test ID
    cy.get('[data-cy="imputEmail1"]')
 
    })

    it('second test', () => {
    
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // Theory
    // get() -  find elements on the page by locator globally
    // find() - find child elements by locator
    // contains() - find HTML text and by text and by locator
    
    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')
    // find method: can find a child elements in the relation to the parent element and find method cannot be called directly from cy.find it will be a mistake.
    
    cy.contains('nb-card','Horizontal form').find('button')
    // contains find elements by HTML text and locator

    cy.contains('nb-card','Horizontal form').contains('Sign in')
    
    //get always find elements on the entire page
    cy.contains('nb-card','Horizontal form').get('button')

    //cypress chains and DOM
    cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('[class="custom-checkbox"]')
        .click()

    })

        it('save subject of the command',() => {
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
        
        //CAN NOT DO THIS because Cypress has its own way how to save the subject of the command to the constants or to the objects then reuse them later in the test
        //const usingTheGrid = cy.contains('nb-card','Using the Grid')
        //usingTheGrid.find('[for="inputEmail1"]').should('contain','Email')
        //usingTheGrid.find('[for="inputPassword2"]').should('contain','Password')

        //approach 1: Cypress Alias -> globally use everywhere in your test
        cy.contains('nb-card','Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain','Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain','Password')
        
        //approach 2: Cypress then() methods -> single method/single function in single place
        cy.contains('nb-card','Using the Grid').then(usingTheGridForm => { // object after 'then' only within the block NOT outside 
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain','Email') //cy.wrap() -> convert Jquery method to Cypress method
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain','Password')
        
        })
    })
        it('extract text values', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
        
        // approach 1:
        cy.get('[for="exampleInputEmail1"]').should('contain','Email address')
        
        // approach 2
         cy.get('[for="exampleInputEmail1"]').then(label => { // label after 'then' method represents for Object value
            const labelText = label.text() //using text method in Jquery 
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain','Email address')
         })

        // approach 3: 
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => { //text after 'then' method represents for pure text
            expect(text).to.equal('Email address')
        })
        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', "Email address")

        // approach 4: 
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
            expect(classValue).to.equal('label')
        })
        
        // approach 5: invoke property
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop' , 'value').should('contain', 'test@test.com').then(property => {
            expect(property).to.equal('test@test.com')
        })
    })

    it('radio buttons', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked') // provide a flag 'true' to be disable default check of elements
            cy.wrap(radioButtons).eq(1).check({force: true})
            cy.wrap(radioButtons).eq(0).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).check({force: true}).should('be.disabled')
        })
    })
    it('checkboxes', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()
        
        cy.get('[type="checkbox"]').uncheck({force: true})
        cy.get('[type="checkbox"]').eq(0).check({force: true})
        cy.get('[type="checkbox"]').eq(1).uncheck({force: true})
        cy.get('[type="checkbox"]').eq(2).uncheck({force: true})
        
    })
    
    it('Date picker', () => {

        function selectDayFromCurrent(day){

            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDate = date.getDate()
            let futrureMonth = date.toLocaleDateString('en-US', {month: 'short'})
            let futrureYear = date.getFullYear()
            let dateToAssert = `${futrureMonth} ${futureDate}, ${futrureYear}`

            cy.get('nb-calendar-navigation').invoke('attr' , 'ng-reflect-date').then( dateAttribute =>{
                if(!dateAttribute.includes(futrureMonth) || !dateAttribute.includes(futrureYear)){
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day)
                } else {
                    cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
                }

            })
            return dateToAssert
        }

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.contains('nb-card','Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            const dateToAssert = selectDayFromCurrent(200)
            //cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
        })
    })
    
    it.only('List and dropdown', () => {
        cy.visit('/')

        //1
        cy.get('nav').find('nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav').find('nb-select').should('contain', 'Dark')

        //2
        cy.get('nav').find('nb-select').then( dropDown => {
            cy.wrap(dropDown).click()
            //loop 4 elements (light, dark, cosmic, corparate) using loop 
            cy.get('.options-list').find('nb-option').each( (listItem, index) => { 
                const itemText = listItem.text().trim() //method trim will remove any space in text
                cy.wrap(listItem).click()
                cy.wrap(dropDown).should('contain', itemText)
                // 'index' argument: represent the index of the loop during the each loop cycle
                if( index < 3){
                    cy.wrap(dropDown).click()
                }
               // When you work with the list or dropdowns-> A good way to select the values from the list is just using a text
               
            })

        })
        
    })
})
