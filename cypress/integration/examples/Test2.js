/// <reference types='Cypress' />

describe("Second Test suite", () => {
  it("Second test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const text = $el.find(".product-name").text();
        if (text.includes("Cashews")) {
          cy.wrap($el).find("button").click();
          //   $el.contains("ADD TO CART").click();
        }
      });

    cy.get(".cart-icon > img").click();
    cy.get(".cart-preview > .action-block > button").click();
  });
});
