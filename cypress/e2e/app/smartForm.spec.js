describe('Smart form page', () => {
    it('should display valid users', () => {
        cy.visit('pages/tables/smart-table');
        cy.get('.ng2-smart-action-add-add').click();
        
        cy.get('input[ng-reflect-name="id"]').type('1', {delay: 50});
        cy.get('input[ng-reflect-name="firstName"]').type('Denis', {delay: 50});
        cy.get('input[ng-reflect-name="lastName"]').type('Naporchuk', {delay: 50});
        cy.get('input[ng-reflect-name="username"]').type('ddnaporchuk', {delay: 50});
        cy.get('input[ng-reflect-name="email"]').type('den@test.test', {delay: 50});
        cy.get('input[ng-reflect-name="age"]').type('24', {delay: 50});

        cy.get('i.nb-checkmark').click();

        cy.get('table tbody tr.ng-star-inserted').as('createdUser');
        cy.get('@createdUser').eq(0).should('contain', "Denis");
        cy.get('@createdUser').eq(0).should('contain', "Naporchuk");
        cy.get('@createdUser').eq(0).should('contain', "ddnaporchuk");
        cy.get('@createdUser').eq(0).should('contain', "den@test.test");
        cy.get('@createdUser').eq(0).should('contain', "24");
        
        cy.get('i.nb-edit').eq(0).click();

        cy.get('input[ng-reflect-name="id"]').clear().type('1', {delay: 50});
        cy.get('input[ng-reflect-name="firstName"]').clear().type('Anton', {delay: 50});
        cy.get('input[ng-reflect-name="lastName"]').clear().type('Kanarchuk', {delay: 50});
        cy.get('input[ng-reflect-name="username"]').clear().type('foxfire', {delay: 50});
        cy.get('input[ng-reflect-name="email"]').clear().type('test@test.com', {delay: 50});
        cy.get('input[ng-reflect-name="age"]').clear().type('42', {delay: 50});

        cy.get('i.nb-checkmark').click();

        cy.get('@createdUser').eq(0).should('contain', "Anton");
        cy.get('@createdUser').eq(0).should('contain', "Kanarchuk");
        cy.get('@createdUser').eq(0).should('contain', "foxfire");
        cy.get('@createdUser').eq(0).should('contain', "test@test.com");
        cy.get('@createdUser').eq(0).should('contain', "42");
    })

})