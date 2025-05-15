import ModalPage from "../support/pageObjects/ModalPage";

describe("Modal Page - FrontTestLab", () => {
  beforeEach(() => {
    ModalPage.visit();
  });

  it("should open and close the modal", () => {
    ModalPage.openModal();
    ModalPage.getModal().should("be.visible");

    ModalPage.closeModal();
    ModalPage.getModal().should("not.exist");
  });

  it("should show button tooltip on hover", () => {
    ModalPage.hoverTooltipButton();

    cy.get("div.ui.popup")
      .should("be.visible")
      .and("contain.text", "This button does an important action");
  });

  it("should show text tooltip on hover", () => {
    ModalPage.hoverTooltipSpan();

    cy.get("div.ui.popup").should("be.visible").and("contain.text", "Hello!");
  });

  it("should trigger a JavaScript alert", () => {
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });

    ModalPage.clickAlertButton();

    cy.get("@alertStub").should("have.been.calledWith", "Action triggered!");
  });

  it('should confirm with "Yes"', () => {
    cy.window().then((win) => {
      cy.stub(win, "confirm").returns(true).as("confirmStub");
    });

    ModalPage.openConfirmDialog();

    cy.get("@confirmStub").should("have.been.calledOnce");
  });

  it('should confirm with "No"', () => {
    cy.window().then((win) => {
      cy.stub(win, "confirm").returns(false).as("confirmStub");
    });

    ModalPage.openConfirmDialog();

    cy.get("@confirmStub").should("have.been.calledOnce");
  });
});
