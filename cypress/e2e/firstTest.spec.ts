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
    cy.get('[class = "input-full-width size-medium shape-rectangle"]');  // finding by all the included classes only

// by Tag Name and Attribute with value
    cy.get('input[placeholder="Email"]');

// by two different Attributes1
    cy.get('[placeholder="Email"][type="email"]');

// by Tag Name, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');
  });

  it('second test', () => {

    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.get('[data-cy="signInButton"]');

    cy.contains('Sign in');

    cy.contains('[status="warning"]', 'Sign in');

    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click();

    cy.contains('nb-card', 'Horizontal form').find('[type="email"]');

  });

  it.only('then and wrap methods', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
    // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email');
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');

    // cypress style
    cy.contains('nb-card', 'Using the Grid').then( firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
      expect(emailLabelFirst).to.equal('Email');
      expect(passwordLabelFirst).to.equal('Password');

      cy.contains('nb-card', 'Basic form').then( SecondForm => {
        const passwordSecondText = SecondForm.find('[for="exampleInputPassword1"]').text();
        expect(passwordLabelFirst).to.equal(passwordSecondText);

        cy.wrap(SecondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password');
      });
    });

  });

});
