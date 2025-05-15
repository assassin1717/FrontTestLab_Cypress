const SELECTORS = {
  dragItem: (itemName) => `[data-testid="drag-item-${itemName}"]`,
  dropZone: '[data-testid="drop-zone"]',
  droppedItem: (itemName) => `[data-testid="dropped-item-${itemName}"]`,
};

class DragDropPage {
  visit() {
    cy.visit("/drag");
  }

  dragItemToDropZone(itemName) {
    const dataTransfer = new DataTransfer();

    cy.get(SELECTORS.dragItem(itemName)).trigger("dragstart", { dataTransfer });

    cy.get(SELECTORS.dropZone)
      .trigger("drop", { dataTransfer })
      .trigger("dragend");
  }

  getDroppedItem(itemName) {
    return cy.get(SELECTORS.droppedItem(itemName));
  }

  selectors() {
    return SELECTORS;
  }
}

export default new DragDropPage();
