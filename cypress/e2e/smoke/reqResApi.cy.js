import apiData from "../../fixtures/apiData";
import personCreds from "../../fixtures/personCreds";

describe("Reqres basic tests", () => {
  it("Get user ID and verify user name.", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      body: personCreds,
    })
      .its("body")
      .should("nested.include", { id: 1 })
      .then((res) => cy.wrap(res.id).as("userID"));

    cy.get("@userID").then((userID) => {
      cy.request("GET", `https://reqres.in/api/users/${userID}`)
        .its("body.data")
        .should("nested.include", { first_name: "George" });
    });
  });

  it("Resource: get list of resources, single resource, negative resource responce.", () => {
    cy.request("GET", "https://reqres.in/api/unknown/2")
      .its("body.data")
      .should("deep.equal", apiData);

    cy.request("GET", "https://reqres.in/api/unknown")
      .its("body")
      .should("nested.include", {
        page: 1,
        per_page: 6,
        total: 12,
        total_pages: 2,
      })
      .then((body) => {
        expect(body.data).to.have.length(6);
      });

    cy.request({
      method: "GET",
      url: "https://reqres.in/api/unknown/99",
      failOnStatusCode: false,
    })
      .its("status")
      .should("eql", 404);
  });

  it("Create/ Update/ Delete ", () => {
    cy.request("POST", "https://reqres.in/api/users", {
      name: "morpheus",
      job: "succer",
    })
      .its("body")
      .then((body) => {
        expect(body.name).to.equal("morpheus");
        expect(body.job).to.equal("succer");
        const currentDate = new Date().toISOString().slice(0, -7);
        expect(body.createdAt).to.include(currentDate);
        expect(body.id).to.exist;
        cy.wrap(body.id).as("personId");
      });

    cy.get("@personId").then((personId) => {
      cy.request("PATCH", `https://reqres.in/api/users/${personId}`, {
        name: "morpheus",
        job: "winner",
      })
        .its("body")
        .then((body) => {
          console.log(body);
          expect(body.name).to.equal("morpheus");
          expect(body.job).to.equal("winner");

          const createdAtLocal = new Date().toISOString().slice(0, -6);
          expect(body.updatedAt).to.include(createdAtLocal);
        });

      cy.request("DELETE", `https://reqres.in/api/users/${personId}`)
        .its("status")
        .should("eql", 204);
    });
  });

  it("User Register (Positive + Negative)", () => {
    cy.request("POST", "https://reqres.in/api/register", {
      email: "george.bluth@reqres.in",
      password: "SuperKek",
    })
      .its("body")
      .then((body) => {
        expect(body.id).eql(1);
        expect(body.token).to.exist;
        expect(body.token).to.have.length(17);
        expect(Object.keys(body)).to.have.length(2);
      });
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      body: { email: "george.bluth@reqres.in" },
      failOnStatusCode: false,
    })
      .its("status")
      .should("eq", 400);
  });
});
