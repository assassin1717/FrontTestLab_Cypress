import FormPage from "../support/pageObjects/FormPage";

describe("Form Page - FrontTestLab", () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it("should submit the registration form successfully", () => {
    FormPage.fillRegistrationForm({
      name: "Jane Tester",
      email: "jane@example.com",
      password: "secret123",
      role: "qa",
      gender: "female",
      acceptTerms: true,
    });

    FormPage.submitRegistration();

    FormPage.successRegisterMessageVisible();
  });

  it("should show validation errors on empty registration", () => {
    FormPage.submitRegistration();

    FormPage.errorRegisterMessagesVisible();
  });

  it("should login successfully with valid credentials", () => {
    FormPage.login({ email: "user@fronttestlab.com", password: "test!123" });

    FormPage.successLoginMessageVisible();
  });

  it("should show login error for invalid credentials", () => {
    FormPage.login({ email: "invalid@test.com", password: "wrong" });

    FormPage.errorLoginMessageVisible();
  });

  it("should select an option from the native HTML select", () => {
    FormPage.selectFromNativeDropdown("vue");

    cy.get('[data-testid="selected-value"]').should("contain.text", "vue");
  });
});
