const SELECTORS = {
  showSuccessButton: '[data-testid="show-success-btn"]',
  showErrorButton: '[data-testid="show-error-btn"]',
  showToastButton: '[data-testid="show-toast-btn"]',

  successMessage: '[data-testid="success-message"]',
  errorMessage: '[data-testid="error-message"]',
  toastMessage: '[data-testid="toast-message"]',
};

class NotificationsPage {
  visit() {
    cy.visit("/notif");
  }

  showSuccess() {
    cy.get(SELECTORS.showSuccessButton).click();
  }

  showError() {
    cy.get(SELECTORS.showErrorButton).click();
  }

  showToast() {
    cy.get(SELECTORS.showToastButton).click();
  }

  getSuccessMessage() {
    return cy.get(SELECTORS.successMessage);
  }

  getErrorMessage() {
    return cy.get(SELECTORS.errorMessage);
  }

  getToastMessage() {
    return cy.get(SELECTORS.toastMessage);
  }

  selectors() {
    return SELECTORS;
  }
}

export default new NotificationsPage();
