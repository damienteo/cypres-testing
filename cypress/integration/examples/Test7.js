/// <reference types='Cypress' />

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("Seventh Test suite", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("should be able to test frameworks with hooks", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    homePage.getEditBox().type(this.data.name);

    homePage.getGender().select(this.data.gender);

    homePage.getTwoWayDataBinding().should("have.value", this.data.name);

    homePage.getEditBox().should("have.attr", "minlength", "2");

    homePage.getEntrepreneur().should("be.disabled");

    homePage.getShopTab().click();

    // cy.get("h4.card-title").each(($el, index, $list) => {
    //   if ($el.text().includes("Blackberry")) {
    //     cy.get("button.btn.btn-info").eq(index).click();
    //   }
    // });
    // cy.selectProduct(this.data.productName[0]);
    // cy.selectProduct(this.data.productName[1]);

    this.data.productName.forEach((name) => {
      cy.selectProduct(name);
    });

    productPage.checkoutButton().click();
    cy.contains("Checkout").click();
    cy.get("#country").type("India");
    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get('input[type="submit"]').click();
    // cy.get(".alert").should(
    //   "have.text",
    //   "Success! Thank you! Your order will be delivered in next few weeks :-)."
    // );
    cy.get(".alert").then(function (element) {
      const actualtext = element.text();
      expect(actualtext.includes("Success")).to.be.true;
    });
  });
});
