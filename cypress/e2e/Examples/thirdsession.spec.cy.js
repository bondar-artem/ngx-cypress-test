describe("Third test suite", () => {
  before(() => {
    cy.accessApplication();
    cy.standarduserLogin();
    cy.verifyApplication();
  });
  it("Third test", () => {
    cy.addProduct();
    cy.verifyCartPath();
  });
});
