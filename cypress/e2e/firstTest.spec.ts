/// <reference types="cypress" />

describe ('Our first suite', () => {

  it('first test', () => {

    cy.visit('/'); // visit the baseUrl from config file
    cy.contains('Forms').click(); // searching elements with the name Forms
    cy.contains('Form Layouts').click();

// by Tag Name
    cy.get('input');

// by ID
    cy.get('#inputEmail');

// by Class name - finding by single class
    cy.get('.input-full-width');

// by Attribute name
    cy.get('[placeholder]');

// by Attribute name and value
    cy.get('[placeholder="Email"]');

// by Class value
    cy.get('[class = "input-full-width size-medium shape-rectangle"]')  // finding by all of the included classes only

// by Tag Name and Attribute with value
    cy.get('input[placeholder="Email"]');

// by two different Attributes1
    cy.get('[placeholder="Email"][type="email"]');

// by Tag Name, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

// The most recommended way by Cypress
    cy.get('[data="inputEmail"]');
  });

  it.only('second test', () => {

    cy.visit('/'); // visit the baseUrl from config file
    cy.contains('Forms').click(); // searching elements with the name Forms
    cy.contains('Form Layouts').click();


  });

});
