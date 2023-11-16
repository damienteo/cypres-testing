/// <reference types='Cypress' />
/// <reference types='cypress-iframe' />
import "cypress-iframe";

describe("Seventh Test suite", () => {
  it("should be able to test frameworks with hooks", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get("input[name='name']:nth-child(1").type("Bob");

    cy.get("select").select("Female");
  });
});
