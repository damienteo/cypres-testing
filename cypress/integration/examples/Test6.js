/// <reference types='Cypress' />
/// <reference types='cypress-iframe' />
import "cypress-iframe";

describe("Sixth Test suite", () => {
  it("should be able to test iframes", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('a[href*="mentorship"]').eq(0).click();

    // cy.iframe().find('h1[class*="pricing-title"]').should("have.length", 2);
  });
});
