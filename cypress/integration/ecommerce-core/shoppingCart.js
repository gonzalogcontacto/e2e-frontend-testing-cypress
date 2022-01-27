context("Feature: User discovering products available ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  describe("Scenario: User get a look to the product list", () => {
    describe("Given 0 products selected", () => {
      it("Then cart is empty", () => {
        cy.get(".cart").contains("No hay productos");
      });
    });
    describe("Given 1 product cart selected", () => {
      it("Then cart is not empty", () => {
        cy.get(".addToShoppingCart").first().click();
        cy.get(".cart").should("not.contain", "No hay productos");
      });
    });
  });
});
