/// <reference types="cypress" />

describe("Second regression suite", () => {
  const name = "Kirill";
  const lastName = "Petrov";
  const movie = "Avatar";
  const something = "Something ;)";
  const email = "mail@mymail.com";
  const age = 13;
  const ageLength = 2;

  beforeEach("Open application", () => {
    cy.visit(Cypress.env("baseUrl") + "/pages");
  });
  it("Stepper verification", () => {
    cy.contains("Layout").click();
    cy.contains("Stepper").click();
    cy.get(".steppers-container [class='horizontal'] .step")
      .eq(0)
      .should("not.have.class", "completed");
    cy.get(".steppers-container input").type(`${name}{enter}`);
    cy.get(".steppers-container [class='horizontal'] .step")
      .eq(0)
      .should("have.class", "completed");
    cy.get(".steppers-container [class='horizontal'] .step")
      .eq(1)
      .should("not.have.class", "completed");
    cy.get(".steppers-container input").type(`${movie}`);
    cy.contains(
      ".steppers-container [class='horizontal'] button",
      "next"
    ).click();
    cy.get(".steppers-container [class='horizontal'] .step")
      .eq(1)
      .should("have.class", "completed");
    cy.get(".steppers-container [class='horizontal'] .step")
      .eq(2)
      .should("not.have.class", "completed");
    cy.get(".steppers-container input").type(`${something}{enter}`);
    cy.get(".steppers-container [class='horizontal'] .step")
      .eq(2)
      .should("have.class", "completed");
  });
  it("Accordion verification", () => {
    cy.contains("Layout").click();
    cy.contains("Accordion").click();
    cy.get(".item-body").eq(0).should("be.hidden");
    cy.contains("Product Details").click();
    cy.get(".item-body").eq(0).should("be.visible");
  });
  it("Verify form", () => {
    cy.intercept("GET", "/sockjs-node/info?t=*").as("submitReq");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.get('.form-inline [placeholder="Jane Doe"]').type(name);
    cy.get('.form-inline [placeholder="Email"]').type(email);
    cy.get(".form-inline").submit();
    cy.wait("@submitReq");
    cy.get('.form-inline [placeholder="Jane Doe"]').should("be.empty");
    cy.get('.form-inline [placeholder="Email"]').should("be.empty");
  });
  it("Verify modal window", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Dialog").click();
    cy.contains("button", "Open Dialog with backdrop click").click();
    cy.get("ngx-showcase-dialog").should("be.visible");
    cy.contains("button", "Open Dialog with backdrop click").realClick();
    cy.get("ngx-showcase-dialog").should("not.exist");
    cy.contains("button", "Open without backdrop click").click();
    cy.get("nb-dialog-container").should("be.visible");
    cy.contains("button", "Open without backdrop click").realClick();
    cy.get("nb-dialog-container").should("be.visible").find("button").click();
    cy.get("nb-dialog-container").should("not.exist");
  });
  it("Verify popover", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Popover").click();
    cy.get(".primitive-overlay").should("not.exist");
    cy.contains("Top").realHover();
    cy.get(".primitive-overlay").should(
      "have.text",
      "Hello, how are you today?"
    );
  });
  it("Verify toastr", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();
    cy.get(".position-select").click();
    cy.get('[ng-reflect-value="bottom-left"]').click();
    cy.contains("button", "Show toast").click();
    cy.get("nb-toast").should("be.visible");
    cy.wait(3000);
    cy.get("nb-toast").should("not.exist");
  });
  it("Verify table data, create new table row.", () => {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.get("thead input").eq(5).type(age);
    cy.get("tbody tr").should("have.length", ageLength);
    cy.get("thead input").eq(5).clear();
    cy.get(".nb-plus").click();
    cy.get("thead tr")
      .eq(2)
      .then((newRow) => {
        cy.wrap(newRow).find('[placeholder="First Name"]').type(name);
        cy.wrap(newRow).find('[placeholder="Last Name"]').type(lastName);
        cy.wrap(newRow).find('[placeholder="E-mail"]').type(email);
        cy.get(".nb-checkmark").click();
      });
    cy.get("tbody tr")
      .eq(0)
      .then((createdTable) => {
        cy.wrap(createdTable).find("td").eq(2).should("have.text", name);
        cy.wrap(createdTable).find("td").eq(3).should("have.text", lastName);
        cy.wrap(createdTable).find("td").eq(5).should("have.text", email);
      });
  });
  context("Reset password suite", () => {
    beforeEach("Go to reset password,type new password", () => {
      cy.contains("Auth").click();
      cy.contains("Reset Password").click();
      cy.get("#input-password").type(Cypress.env('newPassword'));
    });

    it("Positive password reset.", () => {
      cy.get("#input-re-password").type(Cypress.env('newPassword'));
      cy.get("form button").click();
      cy.get("nb-menu").should("be.visible");
    });
    it("Negative reset > Confirm password incorrect. ", () => {
      cy.get("#input-re-password").type("newPassword");
      cy.get("form button").click();
      cy.get("p.caption")
        .should("be.visible")
        .and("contain", "Password does not match the confirm password.");
    });
    it("Negative reset > Confirm password empty. ", () => {
      cy.get("#input-re-password").clear();
      cy.get("#input-password").click();
      cy.get("p.caption")
        .should("be.visible")
        .and("contain", "Password confirmation is required!");
    });
  });
});
//new code line (probably with some bugs)