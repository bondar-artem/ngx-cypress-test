class SmartFormPage {
    visit() {
        cy.visit('pages/tables/smart-table');
    }

    addNewUser(user) {
        cy.get('.ng2-smart-action-add-add').click();
        this.fillUserForm(user);
        cy.get('i.nb-checkmark').click();
    }

    editUser(user) {
        cy.get('i.nb-edit').eq(0).click();
        this.fillUserForm(user);
        cy.get('i.nb-checkmark').click();
    }

    fillUserForm(user) {
        cy.get('input[ng-reflect-name="id"]').clear().type(user.id, { delay: 50 });
        cy.get('input[ng-reflect-name="firstName"]').clear().type(user.firstName, { delay: 50 });
        cy.get('input[ng-reflect-name="lastName"]').clear().type(user.lastName, { delay: 50 });
        cy.get('input[ng-reflect-name="username"]').clear().type(user.username, { delay: 50 });
        cy.get('input[ng-reflect-name="email"]').clear().type(user.email, { delay: 50 });
        cy.get('input[ng-reflect-name="age"]').clear().type(user.age, { delay: 50 });
    }

    getUserInfo() {
        return cy.get('table tbody tr.ng-star-inserted').eq(0);
    }
}

export default new SmartFormPage();