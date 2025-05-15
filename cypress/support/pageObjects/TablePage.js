const SELECTORS = {
  staticTable: '[data-testid="user-table"]',
  dynamicTable: '[data-testid="user-table-dynamic"]',
  refreshButton: '[data-testid="refresh-users-button"]',
  getRow: (id) => `[data-testid="row-${id}"]`,
  getDeleteButton: (id) => `[data-testid="delete-${id}"]`,
};

class TablePage {
  visit() {
    cy.visit("/table");
  }

  getStaticTable() {
    return cy.get(SELECTORS.staticTable);
  }

  getDynamicTable() {
    return cy.get(SELECTORS.dynamicTable);
  }

  clickRefreshButton() {
    cy.get(SELECTORS.refreshButton).click();
  }

  getRowById(id) {
    return cy.get(SELECTORS.getRow(id));
  }

  deleteRowById(id) {
    cy.get(SELECTORS.getDeleteButton(id)).click();
  }

  selectors() {
    return SELECTORS;
  }
}

export default new TablePage();
