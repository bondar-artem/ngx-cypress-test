it.only('', () => {
  cy.visit('https://pure.app/app/en/feed');
  cy.contains('Sign in with Google').click();

  cy.origin('accounts.google.com', () => {
    cy.get('input[type="email"]')
      .type('9nnnice@gmail.com');
    cy.contains('Հաջորդը').click();
    cy.wait(10000).then(() => {
      cy.get('input[type="password"]')
        .type('Kolopko123!)');
      cy.contains('Հաջորդը').click();
    });
  });
});
