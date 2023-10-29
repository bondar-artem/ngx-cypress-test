import {login} from "../../utils/auth";

describe('Authorization', () => {
    
//     it('should login with valid credentials', () => {
//         cy.visit('auth/login');

//         cy.get('form input#input-email').type('test@test.com', {delay: 50});
//         cy.get('form input#input-password').type('Test312pass');

//         cy.get('form .custom-checkbox').click();
//         cy.get('form button[status="primary"]').click();
        
//         cy.url().should('contain', '/pages')
//     });

    it('should login with valid credentials', () => {
        login("test@test.com", "Password123", true)
    });
});