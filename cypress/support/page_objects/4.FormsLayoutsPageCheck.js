export class formsLayoutPage {

    submitInlineFormWithNameAndEmail(name, email){
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();
        cy.contains('nb-card', 'Inline form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }
    submitUsingTheGridWithEmailAndPassword(email, password){
        cy.contains('nb-card', 'Using the Grid').find('form').then(input => {
            cy.wrap(input).find('[placeholder="Email"]').type(email)
            cy.wrap(input).find('[placeholder="Password"]').type(password)
            cy.wrap(input).find('[type="radio"]').check({force: true})
            cy.wrap(input).submit()
            
        })
    }

    submitBasicFormWithEmailAndPassword(email, password){
        cy.contains('nb-card', 'Basic form').find('form').then(input => {
            cy.wrap(input).find('[placeholder="Email"]').type(email)
            cy.wrap(input).find('[placeholder="Password"]').type(password)
            cy.wrap(input).find('[type="checkbox"]').check({force: true})
            cy.wrap(input).submit()
                
        })
    }
    submitFormWithoutLabelsRecipientsSubjectMessage(recipients, subject, message){
        cy.contains('nb-card', 'Form without labels').find('form').then(input => {
            cy.wrap(input).find('[placeholder="Recipients"]').type(recipients)
            cy.wrap(input).find('[placeholder="Subject"]').type(subject)
            cy.wrap(input).find('[placeholder="Message"]').type(message)
            cy.wrap(input).submit()
                
        })
    }
    submitBlockFormFirstNameLastNameEmailWebsite(firstname, lastname, email, website){
        cy.contains('nb-card', 'Block form').within(() => {
            cy.get('input[placeholder="First Name"]').type(firstname)
            cy.get('input[placeholder="Last Name"]').type(lastname)
            cy.get('input[id="inputEmail"]').type(email)
            cy.get('input[placeholder="Website"]').type(website)
            cy.get('button[type="submit"]').click()

        })
    }
    submitHorizontalFormEmailPassword(email, password){
        cy.contains('nb-card', 'Horizontal form').within(() => {
            cy.get('[placeholder="Email"]').type('blabla' + '{enter}')
            cy.on('window:alert', (text) => {
                expect(text).to.contains("Please include an '@' in the email address. 'blabla' is missing an '@'.");
                return true;
              });
            cy.get('[placeholder="Email"]').clear()
            cy.get('[placeholder="Email"]').type(email)
            cy.get('[placeholder="Password"]').type(password)
            cy.get('[type="checkbox"]').check({force: true})
        })
    }


}

export const onFormsLayoutsPage = new formsLayoutPage()