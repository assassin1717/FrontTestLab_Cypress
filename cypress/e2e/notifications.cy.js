import NotificationsPage from "../support/pageObjects/NotificationsPage";

describe("Notifications Page - FrontTestLab", () => {
  beforeEach(() => {
    NotificationsPage.visit();
  });

  it("should show a success message", () => {
    NotificationsPage.showSuccess();

    NotificationsPage.getSuccessMessage()
      .should("be.visible")
      .and("contain.text", "Operation completed successfully!");
  });

  it("should show an error message", () => {
    NotificationsPage.showError();

    NotificationsPage.getErrorMessage()
      .should("be.visible")
      .and("contain.text", "Something went wrong");
  });

  it("should show and auto-dismiss a toast message", () => {
    NotificationsPage.showToast();

    NotificationsPage.getToastMessage()
      .should("be.visible")
      .and("contain.text", "This is a toast message!");

    NotificationsPage.getToastMessage().should("not.be.visible");
  });
});
