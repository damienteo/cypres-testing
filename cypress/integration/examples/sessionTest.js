/// <reference types='Cypress' />

describe("Session Test suite", () => {
  it("should be logged in through JWT in local storage", () => {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          //   cy.log({ token: Cypress.env("token") });
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });

    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country").type("ind");
    cy.get(".ta-results button").each(($el, index, $list) => {
      if ($el.text() === " India") {
        cy.wrap($el).click();
      }
    });
    cy.get(".action__submit").click();
    cy.wait(2000);
    cy.get(".order-summary button").eq(0).click();
  });
});
