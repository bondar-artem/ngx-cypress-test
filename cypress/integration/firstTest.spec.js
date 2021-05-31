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
  it('then and wrap methods', () => {
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
      cy.contains('nb-card', 'Basic form').then(secondForm => {
        const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
        expect(passwordLabelFirst).to.equal(passwordSecondText)

        /* if we need to make some action with context from firstForm or secondForm the only way is
        to use wrap() func as it make JQuery object back to Cypress object
        */
        cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
      })
    })
  })
  it('Invoke command', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()


    //1 method of work with text in Cypress
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    //2
    cy.get('[for="exampleInputEmail1"]').then(label => {
      expect(label.text()).to.equal('Email address')
    })

    //3
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
      expect(text).to.equal('Email address')
    })
    //3 method to check that checkbox is checked (attribute name changed)
    cy.contains('nb-card', 'Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .invoke('attr', 'class')
      // easiest way
      // .should("contain", 'checked')

      // harder way
      .then(classValue => {
        expect(classValue).to.contain('checked')
      })
  })
  it('assert property', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()

    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
      cy.wrap(input).click()
      cy.get('nb-calendar-day-picker').contains('24').click()
      cy.wrap(input).invoke('prop', 'value').should('contain', 'May 24, 2021')
    })
  })
  it('radio button', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {

      cy.wrap(radioButtons)
        .first()
        .check({force: true})
        .should('be.checked')

      cy.wrap(radioButtons)
        .eq(1)
        .check({force: true})
        .should('be.checked')

      cy.wrap(radioButtons)
        .first()
        .should('not.be.checked')

      cy.wrap(radioButtons)
        .eq(2)
        .should('be.disabled')
    })

  })
  it('checkboxes', () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()
    /*
    .check() can only check your checkboxes, but not instead
    better to use it when you are working with checkboxes
     */
    // cy.get('[type="checkbox"]').check({force:true}) // it will check all checkboxes
    cy.get('[type="checkbox"]').eq(0).click({force: true}).should('not.be.checked')
    cy.get('[type="checkbox"]').eq(1).check({force: true}).should('be.checked')

  })
  it('lists and dropdowns', () => {

    cy.visit('/')

    // 1 way of working with single element
    cy.get('nav nb-select').click()
    cy.get('.options-list').contains('Dark').click()
    cy.get('nav nb-select').should('contain', 'Dark')
    cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')


    //2
    // what if we have a few options to check them?
    cy.get('nav nb-select').then(dropdown => {
      cy.wrap(dropdown).click()
      cy.get('.options-list nb-option').each((listItem, index) => {
        const itemText = listItem.text().trim()

        const colors = {
          "Light": "rgb(255, 255, 255)",
          "Dark": "rgb(34, 43, 69)",
          "Cosmic": "rgb(50, 50, 89)",
          "Corporate": "rgb(255, 255, 255)"
        }

        cy.wrap(listItem).click()
        cy.wrap(dropdown).should('contain', itemText)
        cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
        if (index < 3) {
          cy.wrap(dropdown).click()
        }
      })
    })
  })
  it.only('web-tables', () => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    // 1
    // work with existing table rows
    cy.get('tbody').contains('tr', 'Larry').then( tableRow =>{
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should("contain", '25')
    })
  });
})
