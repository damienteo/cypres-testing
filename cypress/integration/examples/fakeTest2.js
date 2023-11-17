/// <reference types='Cypress' />

describe("Intercept Test suite", () => {
  it("should display different results", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (request) => {
        request.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
        request.continue((response) => {
          // expect(response.statusCode).to.equal(403);
        });
      }
    ).as("dummyUrl");

    cy.get('button[class="btn btn-primary"]').click();

    cy.wait("@dummyUrl").then(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });
  });
});
