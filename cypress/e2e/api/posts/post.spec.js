describe("Posts", ()=>{
    it('should create new post', () => {
        const body = {
            title: 'Post request by Denis',
            body: 'Test body',
            userId: 9,
          }
        cy.api({
            url: "/posts",
            method: 'POST',
            body,
              Headers:{
                'Content-type': 'application/json; charset=UTF-8',
              }
          }).as("createPost")

          cy.get("@createPost").its("status")
          .should("equal", 201)

          cy.get("@createPost").its("body")
          .should("deep.include", body)

        });
    })