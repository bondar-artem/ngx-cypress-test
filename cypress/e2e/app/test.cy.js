
describe ("Stepper page", ()=> {

  it('should find text on page 1', () => {
    cy.visit('pages/layout/stepper')

    cy.get("h3").first().should("have.text", "Step content #1")
  });
  it('should find text on page 2', () => {
    cy.visit('pages/layout/stepper')

    cy.get("h3").last().should("have.text", "Step content #1")

    //cy.visit("https://google.com")
  });
})
