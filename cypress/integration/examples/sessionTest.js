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
  });
});
