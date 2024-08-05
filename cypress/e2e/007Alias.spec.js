/// <reference types="cypress" />

// Alias is a way to give a name to a DOM element, a request, or a set of data so that you can reference it easily later in your tests. This is particularly useful for reusing elements or responses without having to re-query or re-fetch them multiple times.
// You can alias elements using the as command. This is useful when you need to interact with the same element multiple times in your test.

describe('Alias', () => {

  it('Alias', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card','Using the Grid').as('usingTheGrid')
    //now use the alias @usingTheGrid instead of the original selector with the GET method
    cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

  })
})
