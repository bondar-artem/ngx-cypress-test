describe('our first suite', () => {
  it('first test', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    //by Tag Name
    cy.get('input')

    //by ID
    cy.get('#inputEmail1')

    //by Class name
    cy.get('.input-full-width')

    //by Attribute name
    cy.get('[placeholder]')

    //by Attribute name and value
    cy.get('[placeholder="Email"]')

    //by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]')

    //by two different attributes
    cy.get('[placeholder="Email"][type="email"]')

    //by Tag name, Attribute with value, ID and class name
    cy.get('[placeholder="Email"]#inputEmail1.input-full-width')

    // The most recommended way by Cypress
    cy.get('[data-cy="imputEmail1"]')
  })
  it('second test', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // by adding own identifier to Sign In button
    cy.get('[data-cy="signInButton"]')

    //by text on element
    cy.contains('Sign in')

    //by unique Attribute name
    cy.contains('[status="warning"]', 'Sign in')

    /* What if it doesn't have any unique id or smth?
    1. We will search first unique element id in section with needed item
    2. We will jump to parents element
    3. We will find child element with HTML tag button
     */
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should("contain", 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()

    //If we have unique only name of form
    cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
  })
  it.only('then and wrap methods', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should("contain", 'Password')
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should("contain", 'Password')

    //Cypress style
    //Note:  after .then it's going JQuery object
    cy.contains('nb-card', 'Using the Grid').then(firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
      expect(emailLabelFirst).to.equal('Email')
      expect(passwordLabelFirst).to.equal('Password')

      //if we need to compare some value from firstForm context (password label in that case) and from another form
      cy.contains('nb-card', 'Basic form').then(secondForm =>{
        const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
        expect(passwordLabelFirst).to.equal(passwordSecondText)

        /* if we need to make some action with context from firstForm or secondForm the only way is
        to use wrap() func as it make JQuery object back to Cypress object
        */
        cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
      })
    })
  })

})
