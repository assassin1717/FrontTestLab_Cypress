import ButtonsPage from "../support/pageObjects/ButtonsPage";

describe("Buttons Page - FrontTestLab", () => {
  beforeEach(() => {
    ButtonsPage.visit();
  });

  it("should toggle the disabled state of the button", () => {
    ButtonsPage.getDisabledButton().should("not.be.disabled");

    ButtonsPage.toggleDisable();

    ButtonsPage.getDisabledButton().should("be.disabled");

    ButtonsPage.toggleDisable();

    ButtonsPage.getDisabledButton().should("not.be.disabled");
  });

  it("should show loading spinner", () => {
    ButtonsPage.simulateLoading();

    ButtonsPage.getLoadingSpinner().should("be.visible");

    ButtonsPage.getLoadingSpinner().should("not.exist");
  });

  it("should make element disappear after clicking simulate loading", () => {
    ButtonsPage.getDisappearingElement().should("be.visible");

    ButtonsPage.clickToggleVisibilityButton();

    ButtonsPage.getDisappearingElement().should("not.be.visible");
  });
});
