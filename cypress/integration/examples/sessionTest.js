/// <reference types='Cypress' />

const neatCSV = require("neat-csv");

describe("Session Test suite", () => {
  it("should be logged in through JWT in local storage", () => {
    let productName;

    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          //   cy.log({ token: Cypress.env("token") });
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });

    cy.get(".card-body b")
      .eq(1)
      .then(function (element) {
        productName = element.text();
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

    // cy.readFile(
    //   Cypress.config("fileServerFolder") +
    //     "/cypress/downloads/order-invoice_rahul.csv"
    // ).then(async function (text) {
    //   const csv = await neatCSV(text);
    //   const actualProduct = csv[0]["Product Name"];
    //   expect(actualProduct).to.equal(productName);
    // });
  });
});
