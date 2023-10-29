export function login(email, password, rememberMe) {
    cy.visit('auth/login')

    cy.get("form input#input-email").type(email, { delay: 50})
    cy.get("form input#input-password").type(password, { delay: 50})

    if (rememberMe){
      cy.get('form .custom-checkbox').click()
    }

      cy.get('form button[status="primary"]').click()
      cy.url().should('contain', '/pages')
}