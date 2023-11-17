
export class SmartTablePage{

    updateAgeByName(name, age){
        cy.get('tbody').contains('tr', name).then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
       
            cy.wrap(tableRow).should('contain', age)
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        })
        
    }

    addNewrecordWithFirstAndLastName(firstName, lastName){
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {//rows
            cy.wrap(tableRow).find('[placeholder="First Name"]').type(firstName)//assigned to parameter
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type(lastName)
            cy.wrap(tableRow).find('.nb-checkmark').click()

        })
        cy.get('tbody tr').first().find('td').then(tableColumn => {//columns
            cy.wrap(tableColumn).eq(2).should('contain', firstName)
            cy.wrap(tableColumn).eq(3).should('contain', lastName)
        }) 
    }

    deleteRowByIndex(index){
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() => {//added 'index' in order to get needed row
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })    
    }
}

export const onSmartTablePage = new SmartTablePage()
