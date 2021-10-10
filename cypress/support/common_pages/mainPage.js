import { Button } from "../"

export class MainPage {

    clickOnMainSidebarSection(sectionName) {
        cy.get('.menu-sidebar').find('[title="'+sectionName+'"]').then(section => {
            // Button.clickOnButton(section)
            cy.wrap(section).click()
        })
    }

    clickOnSidebarSubsection(sectionName, subsectionName) {
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
        // Button.clickOnSidebarSubsection(sectionName, subsectionName)
    }

    selectBackgroundColor(color) {
        cy.get('nb-layout-header')
            .find('.header-container')
            .find('.appearance-outline')
            .find('button')
            .invoke('attr', 'class')
            .then(dropdownClassValue => {
                if(dropdownClassValue == 'select-button'){
                    cy.get('nb-layout-header')
                    .find('.header-container')
                    .find('.appearance-outline')
                    .click()
                }

                cy.get('#cdk-overlay-0').find('.options-list-container').find('.options-list')
                    .contains(color)
                    .click()
                
                cy.get('nb-layout-header')
                    .find('.header-container')
                    .find('.appearance-outline')
                    .find('button')
                    .should('contain', color)
            })

           
            // .find('[class="cdk-overlay-pane"]')
            // .find('[class="options-list"]')

            // .find('[ng-reflect-value="'+color+'"]')
            // .click()
            
        }
}

export const onMainPage = new MainPage()