export default class Button {

    static clickOnButton(buttonElement) {
        cy.wrap(buttonElement).click()
    }

    static clickOnSidebarSubsection(sectionName, subsectionName) {
        cy.get('.menu-sidebar')
            .find('[title="'+sectionName+'"]')
            .as('section')
            .find('.expand-state')
            .invoke('attr', 'ng-reflect-icon')
            .then(arrowIcon => {
                if(arrowIcon != 'chevron-down-outline') {
                    cy.get('.menu-sidebar').find('[title="'+sectionName+'"]').click()
                }
                cy.get('.menu-sidebar')
                    .find('[title="'+subsectionName+'"]')
                    .click()
            })
        
        
    }
}