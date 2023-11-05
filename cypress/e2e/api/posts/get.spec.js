describe("Posts", ()=>{
    it('should return post by id', () => {
        const postId = 1
        cy.api({
            url: `posts/${postId}`,
            method: 'GET',
          }).as("getPost")
          
          cy.get("@getPost").its("body").should("deep.include", {id: postId});

          cy.get("@getPost").its("status")
          .should("equal", 200)
        });
    })