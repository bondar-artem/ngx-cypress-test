export class HomePage {
  HomePage() {
    cy.get(".logo").should("have.text", "ngx-admin");

    //Theme check
    cy.get(".select-button").click();
    cy.get(".options-list").contains("Dark").click();
    cy.get(".select-button").should("contain", "Dark");
    cy.get(".select-button").click();
    cy.get(".options-list").contains("Cosmic").click();
    cy.get(".select-button").should("contain", "Cosmic");
    cy.get(".select-button").click();
    cy.get(".options-list").contains("Corporate").click();
    cy.get(".select-button").should("contain", "Corporate");
    cy.get(".select-button").click();
    cy.get(".options-list").contains("Light").click();
    cy.get(".select-button").should("contain", "Light");

    //Sidebar options check
    cy.get(".sidebar-toggle").click();
    cy.contains("Layout").click();
    cy.get(
      '[class="menu-item ng-tns-c7-2 ng-tns-c7-1 ng-star-inserted"]'
    ).should("contain", "Stepper", "Accordion");
    cy.get('[class="ng-tns-c7-3 ng-star-inserted"]').should(
      "contain",
      "Accordion"
    );
    cy.contains("Forms").click();
    cy.get('[class="ng-tns-c7-5 ng-star-inserted"]').should(
      "contain",
      "Form Layouts"
    );
    cy.get('[class="ng-tns-c7-6 ng-star-inserted"]').should(
      "contain",
      "Datepicker"
    );
    cy.contains("Modal & Overlays").click();
    cy.get('[class="ng-tns-c7-8 ng-star-inserted"]').should(
      "contain",
      "Dialog"
    );
    cy.get('[class="ng-tns-c7-9 ng-star-inserted"]').should(
      "contain",
      "Window"
    );
    cy.get('[class="ng-tns-c7-10 ng-star-inserted"]').should(
      "contain",
      "Popover"
    );
    cy.get('[class="ng-tns-c7-11 ng-star-inserted"]').should(
      "contain",
      "Toastr"
    );
    cy.get('[class="ng-tns-c7-12 ng-star-inserted"]').should(
      "contain",
      "Tooltip"
    );
    cy.contains("Extra Components").click();
    cy.get('[class="ng-tns-c7-14 ng-star-inserted"]').should(
      "contain",
      "Calendar"
    );
    cy.contains("Tables & Data").click();
    cy.get('[class="ng-tns-c7-16 ng-star-inserted"]').should(
      "contain",
      "Smart Table"
    );
    cy.get('[class="ng-tns-c7-17 ng-star-inserted"]').should(
      "contain",
      "Tree Grid"
    );
    cy.contains("Auth").click();
    cy.get('[class="ng-tns-c7-19 ng-star-inserted"]').should(
      "contain",
      "Login"
    );
    cy.get('[class="ng-tns-c7-20 ng-star-inserted"]').should(
      "contain",
      "Register"
    );
    cy.get('[class="ng-tns-c7-21 ng-star-inserted"]').should(
      "contain",
      "Request Password"
    );
    cy.get('[class="ng-tns-c7-22 ng-star-inserted"]').should(
      "contain",
      "Reset Password"
    );

    //Header check
    cy.get('[data-name="search"]').click();
    cy.get('[class="form-content"]').should("be.visible");
    cy.get('[class="form-content"]').click().type("Test{enter}"); //press enter
    cy.get('[data-name="email"]').should("be.visible");
    cy.get('[data-name="Layer 2"]').should("be.visible");
    cy.get('[ng-reflect-name="Nick Jones"]').should("be.visible");
    cy.get('[class="user-container"]').click();
    cy.get('[class="context-menu"]').should("contain", "Profile");
    cy.get('[class="context-menu"]').should("contain", "Log out");

    //Footer check
    cy.get('[class="created-by"]').should(
      "contain",
      "Created with ♥ by Akveo 2019"
    ); 
    //Anchor link in text check
    cy.contains("Created with ♥ by Akveo 2019").within(() => {
      cy.get("a")
        .should("have.attr", "href", "https://akveo.com")
        .and("contain.text", "Akveo");
    });

    cy.get('[class="ion ion-social-github"]').should("be.visible");
    cy.get('[class="ion ion-social-facebook"]').should("be.visible");
    cy.get('[class="ion ion-social-twitter"]').should("be.visible");
    cy.get('[class="ion ion-social-linkedin"]').should("be.visible");
  }
}

export const homePage = new HomePage();
