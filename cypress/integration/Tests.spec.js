/// <reference types="cypress" />

import { Helper, DATA, classes, id, condition } from '../support/helper.js';

describe ('Testovi', () => {

    beforeEach('Login',() => {
        cy.visit('')
        //Check if Sign up button is displayed and click on it
        cy.contains('Login').click()
        //Enter email address
        cy.get('input:first').should('have.attr', 'placeholder', 'Email Address').type(DATA.validEmail)
        //Enter password
        cy.get('input:last').should('have.attr', 'placeholder', 'Password').type(DATA.validPassword)
        //Click on Login button
        cy.get(classes.signUpButton).click()
        //Navigate to the Playground card
        cy.get(classes.playGround).click();
    })
    it('Create new Seniorities',() => {
        cy.get(classes.seniorities).click()
        
        cy.get(classes.crateButton).click()

        cy.get('input:first').should('have.attr', 'placeholder', '* Seniority Title').click().type('Senior')

        cy.get(classes.submitButton).click()
    })
    it('Create new Tech',() => {
        cy.get(classes.technologies).click()
        
        cy.get(classes.crateButton).click()

        cy.get('input:first').should('have.attr', 'placeholder', '* Technology Title').click().type('QA')

        cy.get(classes.submitButton).click()
    })
    it('Create new User',() => {
        cy.get(classes.people).click()
        
        cy.get(classes.crateButton).click()

        cy.get('input:first').should('have.attr', 'placeholder', '* Full Name').click().type('Stefan Nikolic')

        cy.get(':nth-child(3) > :nth-child(1) > .react-dropdown-select').click()

        cy.get('.react-dropdown-select-dropdown').contains('Senior').click()

        cy.get(':nth-child(2) > :nth-child(1) > .react-dropdown-select').type('{downarrow}').type('{enter}')
    })
    it('Edit user',() => {
        cy.get(classes.people).click();
        
        cy.get('.card-profile').contains('Stefan Nikolic').click();

        cy.get('.value').clear().type('Nikolic Stefan');

        cy.get(classes.submitButton).click()

    })
    it('Delete all users',() => {
        cy.get(classes.people).click()
        cy.get('.list-group-item').then( $elems => {
            // using Lodash to invoke the callback N times
            Cypress._.times($elems.length, () => {
              cy.get('.list-group-item:first').click().get('.input-group-btn > .btn').click().get('p > :nth-child(2) > .btn').click()
                .should('not.exist');
            });
          });
        
      

    })

})

