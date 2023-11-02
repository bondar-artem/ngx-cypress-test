describe("Posts", ()=>{
    it('should return list of posts', () => {
        cy.api({
            url: '/posts',
            method: 'GET',
        }).as("getList")
        
        cy.get("@getList").its("status").should("equal", 200);
        cy.get("@getList").its("body").should("have.length", 100);
        cy.get("@getList").its("body").each(post => {
            expect(post).to.have.all.keys('userId', 'id', 'title', 'body');
          });
    });
})