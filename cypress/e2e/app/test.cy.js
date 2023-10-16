
describe("Stepper page", ()=>{

 it('should Find text on the page', ()=>{
   cy.visit('pages/layout/stepper')

   cy.get("h3").first().should("have.text", "Step content #1")
 });
})
