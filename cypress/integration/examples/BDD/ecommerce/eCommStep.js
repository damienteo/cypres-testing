import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";

const homePage = new HomePage();
const productPage = new ProductPage();

Given("I open Ecommerce Page", function () {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to Cart", function () {
  homePage.getShopTab().click();

  this.data.productName.forEach((name) => {
    cy.selectProduct(name);
  });

  productPage.checkoutButton().click();
});

Then("Validate the total prices", function () {
  let sum = 0;
  cy.get("tr td:nth-child(4) strong")
    .each(($el, index, $list) => {
      const text = $el.text();
      const result = text.split(" ");
      const value = result[1].trim();
      sum += Number(value);
    })
    .then(function () {
      cy.log({ sum });
    });

  cy.get("h3 strong").then(function (element) {
    const amount = element.text();
    const result = amount.split(" ");
    const total = result[1].trim();
    expect(sum.toString()).to.equal(total);
  });
});

Then("select the country submit and verify with thanks", function () {
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

When("I fill the form details", function () {
  homePage.getEditBox().type(this.data.name);

  homePage.getGender().select(this.data.gender);
});

Then("validate the forms behaviour", function () {
  homePage.getTwoWayDataBinding().should("have.value", this.data.name);

  homePage.getEditBox().should("have.attr", "minlength", "2");

  homePage.getEntrepreneur().should("be.disabled");
});

Then("select the Shop Page", function () {
  homePage.getShopTab().click();
});
