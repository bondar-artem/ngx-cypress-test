/// <reference types = "cypress" />

describe("Login page and login data filled", () => {

  it("Form login page test1", () => {

    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains('Form Layout').click()

    //add name 
    cy.contains('nb-card', 'Inline form').find('[placeholder="Jane Doe"]')
      .click()
      .type('Milos Lazic')

    cy.get('nb-card-body')
      .should('contain.text', 'Email')
      .get('[data-cy="Email2"]')
      .click()
      .type('milos@gmail.com')

    //checkbox testing
    cy.get('[data-cy="inlinecheckbox"]')
      .find('label')
      .find('input[type="checkbox"]')
      .should('not.contain.text')
      .check({ force: true })
      .should('be.checked')


    //email form input text

    //cy.get('[data-cy="submitButtonMain"]')
    // .click()

    //Add email and password info
    cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
      .click()
      .type('milos@gmail.com')

    //input password field
    cy.contains('nb-card', 'Horizontal form').find('#inputPassword3')
      .click()
      .type('smederevo026')

    //check-box and sign in button activated
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox').click()

    cy.get('[status="warning"]')





    //by tag name
    //y.get("input")

    //by class
    //cy.get(".input-full-width")
    //by attribute
    //cy.get("[placeholder]")

    //by atribute and value
    //cy.get('[placeholder="Email"]')
    //by class value
    //cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by tag name and atribute wiht value

    //cy.get('input[placeholder="Email"]')

    //
    //cy.get('[data-cy="signInButton"]')
  })

})
