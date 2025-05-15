const SELECTORS = {
  openModalButton: '[data-testid="open-modal-btn"]',
  closeModalButton: '[data-testid="close-modal-btn"]',
  modalContent: '[data-testid="modal-content"]',
  tooltipButton: '[data-testid="tooltip-btn"]',
  hoverSpan: '[data-testid="hover-text"]',
  alertButton: '[data-testid="alert-button"]',
  confirmButton: '[data-testid="native-confirm-button"]',
};

class ModalPage {
  visit() {
    cy.visit("/modal");
  }

  openModal() {
    cy.get(SELECTORS.openModalButton).click();
  }

  closeModal() {
    cy.get(SELECTORS.closeModalButton).click();
  }

  getModal() {
    return cy.get(SELECTORS.modalContent);
  }

  hoverTooltipButton() {
    cy.get(SELECTORS.tooltipButton).trigger("mouseover");
  }

  hoverTooltipSpan() {
    cy.get(SELECTORS.hoverSpan).trigger("mouseover");
  }

  clickAlertButton() {
    cy.get(SELECTORS.alertButton).click();
  }

  openConfirmDialog() {
    cy.get(SELECTORS.confirmButton).click();
  }

  selectors() {
    return SELECTORS;
  }
}

export default new ModalPage();
