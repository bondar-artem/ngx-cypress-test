
describe ("Input Name Window", ()=> {

  it('should find dialog window,insert,cancel and submit button', () => {
    cy.visit('/pages/modal-overlays/dialog')

    cy.get('nb-card.form-input-card .result-from-dialog button').as("EnterNameButton")
    cy.get("@EnterNameButton").click()

    cy.get('nb-dialog-container').should('be.visible')

    cy.get('ngx-dialog-name-prompt  nb-card  nb-card-header').should("have.text", "Enter your name")

    cy.get('nb-card-body  input').as("InputField")
    cy.get("@InputField").click()

    cy.get('button.appearance-filled.size-medium.status-success') .should('be.visible')
    cy.get('button.cancel') .should('be.visible')

  });

})
