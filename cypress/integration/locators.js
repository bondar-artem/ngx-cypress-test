describe("Our First Test Suite", () => {
  before("visiting the website", () => {
    cy.visit("/");
    cy.get("a.logo").should("be.visible");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
  });

  it("How to locatate elements using different CSS methods", () => {
    //by Tag Nane
    cy.get("input");
    //by ID
    cy.get("#inputEmail");
    //by Class name
    cy.get(".input-full-width");
    //by Attribute name
    cy.get("[placeholder]");
    //by Attribute name and value
    cy.get('[placeholder="Email"]');
    //by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');
    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]');
    //by two different attributes
    cy.get('[placeholder="Email"][type="email"]');
    //by tag name, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');
    // The most recommended way by Cypress
    cy.get('[data-cy="imputEmail1"]');
  });

  it("contains, parents and find", () => {
    cy.get('[data-cy="signInButton"]').should("be.visible");
    cy.contains("Sign in").should("be.visible");

    // Hey Cypress, get me the locator which is having attribute status as primary containing Sign in
    cy.contains("[status='primary']", "Sign in").should("be.visible");

    // Hey cypress, find an element with id as inputEmail3, go to its parents where tag is form and then find elem with tag button
    // cy.get("#inputEmail3").parent("form").get("button"); // will find all elements with tag button
    
    // .find() is for finding the child elements (elements below the key element)
    // we cannot use cy.find, as it is always used to find child elements from key element
    // cy.get() is searching elements in entire dom and chain find to get
    // .parents() is for finding the elemets above the key element

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();
    // or ------------- or
    
    cy.contains('nb-card','Horizontal form').find('[status="warning"]').should('contain','Sign in')

  });

  it.only("then and wrap methods", () => {});
});
