export class AccordionPage {
  AccordionPage() {
    cy.get(".sidebar-toggle").click();
    cy.contains("Layout").click();
    cy.contains("Accordion").click();
    cy.url().should("include", "/accordion");
    cy.contains("Toggle Accordion By Button").should("be.visible");
    cy.get(
      '[class="appearance-filled size-medium status-primary shape-rectangle transitions"]'
    )
      .contains("Toggle First Item")
      .click();
    cy.contains(
      "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."
    ).should("exist");
    cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"]')
      .contains("Product Details")
      .click();
    cy.contains(
      "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."
    ).should("exist");
    cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"]')
      .contains("Product Details")
      .click();
    cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"]')
      .contains("Reviews")
      .click();
    cy.contains(
      "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."
    ).should("exist");
    cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"]')
      .contains("Reviews")
      .click();
    cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"]')
      .contains("Edit")
      .click();
    cy.contains(
      "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."
    ).should("exist");
    cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"]')
      .contains("Edit")
      .click();

    cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"]')
      .eq(1)
      .then(($secondContainer) => {
        cy.wrap($secondContainer)
          .find('nb-accordion-item-header:contains("Product Details")')
          .click();
        cy.contains(
          "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."
        ).should("exist");
        cy.wrap($secondContainer)
          .find('nb-accordion-item-header:contains("Product Details")')
          .click();
        cy.wrap($secondContainer)
          .find('nb-accordion-item-header:contains("Reviews")')
          .click();
        cy.contains(
          "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."
        ).should("exist");
        cy.wrap($secondContainer)
          .find('nb-accordion-item-header:contains("Reviews")')
          .click();
        cy.wrap($secondContainer)
          .find('nb-accordion-item-header:contains("Edit")')
          .click();
        cy.contains(
          "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way."
        ).should("exist");
      });
  }
}

export const accordionPage = new AccordionPage();
