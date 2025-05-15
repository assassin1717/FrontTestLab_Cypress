const SELECTORS = {
  nameInput: '[data-testid="input-name"]',
  emailInput: '[data-testid="input-email"]',
  passwordInput: '[data-testid="input-password"]',
  roleSelect: '[data-testid="dropdown-role"]',
  genderRadio: (gender) => `[data-testid="radio-${gender}"]`,
  termsCheckbox: '[data-testid="checkbox-terms"]',
  submitButton: '[data-testid="submit-button"]',
  loginEmail: '[data-testid="login-email"]',
  loginPassword: '[data-testid="login-password"]',
  loginButton: '[data-testid="login-button"]',
  nativeSelect: '[data-testid="native-select"]',
  successRegisterMessage: '[data-testid="success-message"]',
  negativeRegisterMessage: '[data-testid="error-message"]',
  successLoginMessage: '[data-testid="login-success"]',
  negativeLoginMessage: '[data-testid="login-error"]',
};

class FormPage {
  visit() {
    cy.visit("/form");
  }

  fillRegistrationForm({ name, email, password, role, gender, acceptTerms }) {
    cy.get(SELECTORS.nameInput).type(name);
    cy.get(SELECTORS.emailInput).type(email);
    cy.get(SELECTORS.passwordInput).type(password);
    this.selectFromRoleDropdown(role);
    cy.get(SELECTORS.genderRadio(gender)).click();

    if (acceptTerms) {
      cy.get(SELECTORS.termsCheckbox).click();
    }
  }

  submitRegistration() {
    cy.get(SELECTORS.submitButton).click();
  }

  login({ email, password }) {
    cy.get(SELECTORS.loginEmail).type(email);
    cy.get(SELECTORS.loginPassword).type(password);
    cy.get(SELECTORS.loginButton).click();
  }

  selectFromRoleDropdown(value) {
    cy.get(SELECTORS.roleSelect)
      .find(".item")
      .each(($el) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            if (text.trim() === value) cy.get($el).click();
          });
      });
  }

  selectFromNativeDropdown(value) {
    cy.get(SELECTORS.nativeSelect).select(value);
  }

  successRegisterMessageVisible() {
    cy.get(SELECTORS.successRegisterMessage).should("be.visible");
  }

  getRegisterErrorTooltip(selector) {
    cy.get(selector).parent().find('div[role="alert"]').should("be.visible");
  }

  errorRegisterMessagesVisible() {
    const errorInputs = [
      SELECTORS.nameInput,
      SELECTORS.emailInput,
      SELECTORS.passwordInput,
    ];
    errorInputs.forEach((input) => {
      this.getRegisterErrorTooltip(input);
    });
  }

  successLoginMessageVisible() {
    cy.get(SELECTORS.successLoginMessage).should("be.visible");
  }

  errorLoginMessageVisible() {
    cy.get(SELECTORS.negativeLoginMessage).should("be.visible");
  }

  selectors() {
    return SELECTORS;
  }
}

export default new FormPage();
