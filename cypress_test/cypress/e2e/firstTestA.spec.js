/// <reference types="cypress" />

describe('First test suite', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        // How to find web element by tag name
        cy.get('input')

        // Find by Id
        cy.get('#inputEmail1')

        // Find by class value
        cy.get('.input-full-width')

        // Find by attribute name
        cy.get('[fullwidth]')

        // Find by attribute and value
        cy.get('[placeholder="Email"]')

        // Find by entire class value 
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // Find by two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // Find by tag, attribute, id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // find by cypress test id
        cy.get('[data-cy="imputEmail1"]')

    })

    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // get() - find elements on the page by locator globally 
        // find() - find child elements by locator 
        // contains() - find HTML text and by text and locator

        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        // cypress chain and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })

    it('save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        //Cypres Alias
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        // Cypress then() methods
        cy.contains('nb-card', 'Using the Grid').then(usingTheGrid => {
            cy.wrap(usingTheGrid).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain', 'Password')
        })
    })

    it('Extract text values', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // 1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then(label => {
            const labelText = label.text()
            expect(labelText).to.equal('Email address')

        })

        //3 
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')

        })
    })

    it('radio buttons', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).eq(0).check({ force: true }).should('be.checked')
            cy.wrap(radioButtons).eq(1).check({ force: true })
            cy.wrap(radioButtons).eq(0).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).should('be.disabled')
        })

    })

    it('checkboxes', () => {
        cy.visit('*/*')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').check({ force: true })

        cy.get('[type="checkbox"]').uncheck({ force: true })

        cy.get('[type="checkbox"]').eq(0).click({ force: true })
        cy.get('[type="checkbox"]').eq(1).click({ force: true })
        cy.get('[type="checkbox"]').eq(2).click({ force: true })
    })

    it('Date picker', () => {
        cy.visit('*/*')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        let date = new Date()
        date.setDate(date.getDate() + 20)
        let futureDate = date.getDate()
        let dateToAssert = `Nov ${futureDate}, 2023`

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
            cy.wrap(input).should('have.value', dateToAssert)
        })

    })

    it('Lists and dropdowns', () => {
        cy.visit('*/*')

        //1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')

        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Light').click()
        cy.get('nav nb-select').should('contain', 'Light')

        //2 - Loop for the dropdown
        cy.get('nav nb-select').then(dropDown => {
            cy.wrap(dropDown).click()
            cy.get('.options-list nb-option').each((listItem, index) => {

                const itemText = listItem.text().trim()
                cy.wrap(listItem).click()
                cy.wrap(dropDown).should('contain', itemText)

                if (index < 3) {
                    cy.wrap(dropDown).click()
                }
            })
        })

    })

    it('Web tables', () => {
        cy.visit('*/*')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // Get the row by text 

        cy.get('tbody')
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(35)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '35')
        })
    })

    it.only('Treinando teste acima', () => {

        cy.visit('*/*')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('thead')
        cy.get('thead').find('.nb-plus').click()

        cy.get('thead').find('tr').eq(2).then(tableRow2 => {
            cy.wrap(tableRow2).find('[placeholder="ID"]').click().type(200)
            cy.wrap(tableRow2).find('.nb-checkmark').click()
        })

        cy.get('tbody').find('tr').eq(0).then(tableRow0 => {
            cy.wrap(tableRow0).find('.ng-star-inserted').should('contain', '200')
        })

        // get each row validation 
        const age = [20, 30, 40, 200]

        cy.wrap(age).each(age => {
            cy.get('thead [placeholder="Age"]').clear().type(age) 
            cy.wait(500)
            cy.get('tbody tr').each(tableRow => {
                if (age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }

            })
        })
    })
})



