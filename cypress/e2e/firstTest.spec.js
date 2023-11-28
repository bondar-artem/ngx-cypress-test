/// <reference types="cypress" />


//test structure
//describe

//context

/**describe('First test suite', () => {

    describe('Suite section', () => {

        beforeEach('login',()=>{
            //repeat for every test
 
        }),

    
        //it describes the body of the test itself
        it('first test', ()=>{
            //put the code of the test
    
        }),

    //it describes the body of the test itself
    it('first test', ()=>{
        //put the code of the test

    }),
    it('secondtest', ()=> {
        
    })


})})*/

describe('First test Suite',()=>{
    it('First test', ()=>{
        // / backslash means baseURL
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //find by Tag name
        cy.get('input')
        // by ID
        cy.get('#inputEmail1')

        //by class value -put . in front
        cy.get('.input-full-width')

        //by attribute name-put []
        cy.get('[fullwidth]')

        //by attribute and value
        cy.get('[placeholder="Email"]')
        
        //by entire class value. The value should be complete
         cy.get('[class="input-full-width size-medium shape-rectangle"]')

         //find by two attributes-put them as a single string w/o space
         cy.get('[placeholder="Email"][fullwidth]')

         //by tag, attribute id and class
         cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

         //by cypress testId
         cy.get('[data-cy="imputEmail1"]')
    })
    it('second test',()=>{
        //theory
        //get()-used to find elements globally on the entire page by locator
        //find()-used to find child elements by locator
        //contains()-used to find HTML text and by text and locator
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card','Horizontal form').find('button','[status="warning"]').click()
        cy.contains('nb-card','Horizontal form').contains('Sign in')
        cy.contains('nb-card','Horizontal form').get('button')

        //cypress chains and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })
    it.only('third test',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // #1 Cypress Alias, can be used anywhere in the project
        cy.contains('nb-card','Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')
        //#2 Cypress then() method. Visible only within this function
        cy.contains('nb-card','Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
        })

    })
})