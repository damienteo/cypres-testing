/// <reference types='Cypress' />

describe("First Test suite", () => {
  it("should have results during search", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    // cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);

    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click(); // find the element

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const text = $el.find(".product-name").text();
        if (text.includes("Cashews")) {
          cy.wrap($el).find("button").click();
          //   $el.contains("ADD TO CART").click();
        }
      });

    cy.get(".products").find(".product").as("productsFound");
    cy.get("@productsFound").should("have.length", 4);

    cy.get(".brand").should("have.text", "GREENKART");

    cy.get(".brand").then((logoelement) => {
      cy.log(logoelement.text());
    });
  });
});
