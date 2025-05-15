import DragDropPage from "../support/pageObjects/DragDropPage";

describe("Drag & Drop Page - FrontTestLab", () => {
  beforeEach(() => {
    DragDropPage.visit();
  });

  it("should drag one item into the drop zone", () => {
    const item = "Apple";

    DragDropPage.dragItemToDropZone(item);

    DragDropPage.getDroppedItem(item).should("exist").and("contain.text", item);
  });

  it("should drag multiple items into the drop zone", () => {
    const items = ["Banana", "Orange", "Mango"];

    items.forEach((item) => {
      DragDropPage.dragItemToDropZone(item);
    });

    items.forEach((item) => {
      DragDropPage.getDroppedItem(item).should("exist");
    });
  });
});
