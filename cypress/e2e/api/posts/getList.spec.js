describe("Posts", ()=>{
    it('should return list of posts', () => {
        cy.api({
            url: '/posts',
            method: 'GET',
        }).its("body").should("have.length", 100)
    });
})