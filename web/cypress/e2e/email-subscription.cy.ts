describe("clicking on the register button", () => {
  it("should be possible to click on the register button and enter the email", () => {
    cy.visit("http://localhost:5173/");
    
    cy.get("#email").type("henrique@example.com");

    cy.get("form").submit();

    cy.contains("Your email has been sent successfully").should("be.visible");
  });
});

