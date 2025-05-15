const SELECTORS = {
  toggleDisableButton: '[data-testid="toggle-disabled-button"]',
  disabledButton: '[data-testid="disabled-button"]',
  simulateLoadingButton: '[data-testid="simulate-loading-button"]',
  toggleVisibilityButton: '[data-testid="toggle-box-button"]',

  loadingSpinner: '[data-testid="loading-indicator"]',
  disappearingElement: '[data-testid="animated-box"]',
};

class ButtonsPage {
  visit() {
    cy.visit("/button");
  }

  getDisabledButton() {
    return cy.get(SELECTORS.disabledButton);
  }

  getLoadingSpinner() {
    return cy.get(SELECTORS.loadingSpinner);
  }

  getDisappearingElement() {
    return cy.get(SELECTORS.disappearingElement);
  }

  toggleDisable() {
    cy.get(SELECTORS.toggleDisableButton).click();
  }

  clickDisabledButton() {
    this.getDisabledButton().click({ force: true });
  }

  simulateLoading() {
    cy.get(SELECTORS.simulateLoadingButton).click();
  }

  clickToggleVisibilityButton() {
    cy.get(SELECTORS.toggleVisibilityButton).click({ force: true });
  }

  selectors() {
    return SELECTORS;
  }
}

export default new ButtonsPage();
