describe("Third test suite", () => {
  it("Third test", () => {
    cy.accessApplication();
    cy.lockedUserLogin();
  });
});
