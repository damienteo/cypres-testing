/// <reference types='Cypress' />

describe("Third Test suite", () => {
  it("should be able to select the various forms of input", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    cy.get('input[type="checkbox"]').check(["option2", "option2"]); // Multi-check

    // static dropdown

    cy.get("select").select("option2");

    // dynamic dropdowns

    cy.get("#autocomplete").type("Ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click();
      }
    });

    cy.get("#autocomplete").should("have.value", "India");

    // visibility
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    // radio buttons
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});
