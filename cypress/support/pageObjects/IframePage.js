const SELECTORS = {
  iframe: '[data-testid="test-iframe"]',
  buttonInsideIframe: "#iframe-button",
  resultParagraph: "#iframe-result",
};

class IframePage {
  visit() {
    cy.visit("/iframe");
  }

  getIframe() {
    return cy.get(SELECTORS.iframe);
  }

  getIframeBody() {
    return this.getIframe()
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then((body) => {
        return cy.wrap(body);
      });
  }

  clickButtonInsideIframe() {
    this.getIframeBody().find(SELECTORS.buttonInsideIframe).click();
  }

  getResultText() {
    return this.getIframeBody().find(SELECTORS.resultParagraph);
  }

  selectors() {
    return SELECTORS;
  }
}

export default new IframePage();
