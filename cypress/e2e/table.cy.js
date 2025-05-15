import TablePage from "../support/pageObjects/TablePage";

describe("Table Page - FrontTestLab", () => {
  beforeEach(() => {
    TablePage.visit();
  });

  it("should display the static table", () => {
    TablePage.getStaticTable().should("be.visible");
  });

  it("should display the dynamic table with users", () => {
    TablePage.getDynamicTable().should("be.visible");
    TablePage.getDynamicTable().find("tr").its("length").should("be.gte", 3);
  });

  it("should remove a row from the dynamic table", () => {
    TablePage.getDynamicTable()
      .find("tr")
      .then((rowsBefore) => {
        const initialLength = rowsBefore.length;

        cy.wrap(rowsBefore)
          .eq(1)
          .invoke("attr", "data-testid")
          .then((rowTestId) => {
            const id = rowTestId.replace("row-", "");
            TablePage.deleteRowById(id);
          });

        TablePage.getDynamicTable()
          .find("tr")
          .should("have.length", initialLength - 1);
      });
  });

  it("should refresh the user list", () => {
    TablePage.getDynamicTable()
      .find("tr")
      .then((rowsBefore) => {
        const initialCount = rowsBefore.length;

        TablePage.clickRefreshButton();

        TablePage.getDynamicTable()
          .find("tr")
          .should("not.have.length", initialCount);
      });
  });
});
