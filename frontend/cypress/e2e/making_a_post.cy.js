describe("Posting a URL of an image", () => {

  before(() => {
    cy.signup("user@email.com", "12345678");
    cy.visit("/login");
    cy.get("#email").type("user@email.com");
    cy.get("#password").type("12345678");
    cy.get("#submit").click();
  })

  it("with a valid image URL, saves the URL to mongodb", () => {
    // cy.visit("/login");
    // cy.get("#email").type("user@email.com");
    // cy.get("#password").type("12345678");
    // cy.get("#submit").click();

    cy.visit("/posts");
    cy.get("#url").type("https://post.healthline.com/wp-content/uploads/2020/08/Feta_Cheese_Good_or_Bad-732x549-thumbnail.jpg");
    cy.get("#submit").click();
    
    cy.get("#").should("include", "https://post.healthline.com/wp-content/uploads/2020/08/Feta_Cheese_Good_or_Bad-732x549-thumbnail.jpg");
  });
});