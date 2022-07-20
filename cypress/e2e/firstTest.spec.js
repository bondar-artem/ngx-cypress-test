/// <reference types="cypress" />

describe('our first suite', () => {

    it('some test name', () => {
    
        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //by Tag Name
        cy.get('input')

        // by ID
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attibute name and value
        cy.get('[placeholder="Email"]')

        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by Tag name, attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('[data-cy="SignInBtn"]')
        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in') //contains is for text search 
        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox') // find is only to find an el inside parent el
        .click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    })

    it.only('then and wrap methods', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should['contain', 'Email']
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should['contain', 'Password']
    
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should['contain', 'Email address']
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should['contain', 'Password']

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password') //jQuery method

        cy.contains('nb-card', 'Basic form').then(secondForm => {
            const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
            expect(passwordLabelFirst).to.equal(passwordLabelSecond)

            cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should['contain', 'Password'] //cypress method
        })
        })

    })

});