import IframePage from "../support/pageObjects/IframePage";

describe("Iframe Page - FrontTestLab", () => {
  beforeEach(() => {
    IframePage.visit();
  });

  it("should display the iframe", () => {
    IframePage.getIframe().should("be.visible");
  });

  it("should click the button inside the iframe and show result", () => {
    IframePage.clickButtonInsideIframe();

    IframePage.getResultText()
      .should("be.visible")
      .and("contain.text", "Button was clicked!");
  });
});
