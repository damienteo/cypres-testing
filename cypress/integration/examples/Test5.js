/// <reference types='Cypress' />

describe("Fifth Test suite", () => {
  it("should be able to handle tables", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });

  it("should ne able to navigate to top", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");

    // to get pass hover issue, will check hidden elements
    cy.contains("Top").click({ force: true });
  });
});
