/// <reference types='Cypress' />

describe("Fourth Test suite", () => {
  it("should be able to create alerts and confirms", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#alertbtn").click();
    cy.on("window:alert", (str, runnable) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.get("[value='Confirm']").click();
    cy.on("window:confirm", (str, runnable) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });

  it("should be able to handle child windows", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get('#navbarSupportedContent a[href*="about"]').click();
    });
  });
});
