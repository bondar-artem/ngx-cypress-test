export class NavigationPage {
  layoutPage() {
    cy.contains("Layout").click();
    cy.contains("Stepper").click();
    cy.url().should("include", "/stepper");
    cy.contains("Accordion").click();
    cy.url().should("include", "/accordion");
  }
  formsPage() {
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.url().should("include", "/layouts");
    cy.contains("Datepicker").click();
    cy.url().should("include", "/datepicker");
  }
  modalOverlays() {
    cy.contains("Modal & Overlays").click();
    cy.contains("Dialog").click();
    cy.url().should("include", "/dialog");
    cy.contains("Window").click();
    cy.url().should("include", "/window");
    cy.contains("Popover").click();
    cy.url().should("include", "/popover");
    cy.contains("Toastr").click();
    cy.url().should("include", "/toastr");
    cy.contains("Tooltip").click();
    cy.url().should("include", "/tooltip");
  }
  extraComponents() {
    cy.contains("Extra Components").click();
    cy.contains("Calendar").click();
    cy.url().should("include", "/calendar");
  }
  tablesData() {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.url().should("include", "/smart-table");
    cy.contains("Tree Grid").click();
    cy.url().should("include", "/tree-grid");
  }
  auth() {
    cy.contains("Auth").click();
    cy.contains("Login").click();
    cy.url().should("include", "/login");
    cy.get('[class="link back-link"]').click();
    cy.contains("Register").click();
    cy.url().should("include", "/register");
    cy.get('[class="link back-link"]').click();
    cy.contains("Request Password").click();
    cy.url().should("include", "/request-password");
    cy.get('[class="link back-link"]').click();
    cy.contains("Reset Password").click();
    cy.url().should("include", "/reset-password");
    cy.get('[class="link back-link"]').click();
  }
}

export const navigateToPage = new NavigationPage();
