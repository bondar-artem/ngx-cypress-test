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
    
    clickOnSearchIcon() {
        cy.get('nb-layout-header')
        .find('.header-container').eq(1)
        .find('.control-item').eq(0).click()
    }

    clickOnEmailIcon() {
        cy.get('nb-layout-header')
        .find('.header-container').eq(1)
        .find('.control-item').eq(1).click()
    }

    clickOnBellIcon() {
        cy.get('nb-layout-header')
        .find('.header-container').eq(1)
        .find('.control-item').eq(2).click()
    }

    clickOnUserProfilIcon() {
        cy.get('nb-layout-header')
        .find('.user-action')
        .click()
        
        cy.get('.cdk-overlay-connected-position-bounding-box')
        .find('.cdk-overlay-pane')
        .find('.context-menu')
        .find('.menu-items')
        .find('[title="Profile"]')
        .parents('.menu-items')
        .find('[title="Log out"]')
    }

    clickOnSidebarIcon() {
        cy.get('.layout-container')
        .find('[tag="menu-sidebar"]')
            .invoke('attr', 'class')
            .then(sidebar => {
                if(sidebar == 'menu-sidebar fixed left compacted'){
                    cy.get('nb-layout-header')
                    .find('.header-container').eq(0)
                    .find('.sidebar-toggle')
                    .click()

                    cy.get('.layout-container')
                    .find('[tag="menu-sidebar"]')
                    .should('have.class', 'menu-sidebar fixed left expanded')
                } else {
                    cy.get('nb-layout-header')
                    .find('.header-container').eq(0)
                    .find('.sidebar-toggle')
                    .click()
                    
                    cy.get('.layout-container')
                    .find('[tag="menu-sidebar"]')
                    .should('have.class', 'menu-sidebar fixed left compacted')
                }
            })

    }
    
}

export const onMainPage = new MainPage()