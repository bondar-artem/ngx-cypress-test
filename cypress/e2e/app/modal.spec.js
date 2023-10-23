describe ("Modal window and elements", () => {

    it("Checking the display of a modal window and its contents", ()=>{
        cy.visit("pages/modal-overlays/dialog")
    
        
        cy.get('.result-from-dialog button').click();
        cy.get('nb-dialog-container').should("be.visible"); 
        cy.get('nb-dialog-container nb-card-header').should("have.text", "Enter your name");
        cy.get('nb-dialog-container input').should('be.visible')
        cy.get('nb-dialog-container button.cancel').should('not.be.disabled');
        cy.get('nb-dialog-container button[status="success"]').should('not.be.disabled');
         
    })
})
