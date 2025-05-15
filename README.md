# FrontTestLab - Cypress Automation Framework

This is a beginner-friendly automation framework built using **Cypress**, designed specifically for UI interaction practice on the [FrontTestLab](https://fronttestlab.web.app) playground.

The goal is to give new QA professionals hands-on experience with real-world frontend elements in a controlled environment.

---

## 🚀 Prerequisites

- [Node.js (LTS)](https://nodejs.org/en/) must be installed (v16+ recommended)

Check installation:

```bash
node -v
npm -v
```

---

## 📦 Install Cypress and Project Dependencies

```bash
npm install
```

This will install Cypress and any required dev dependencies listed in `package.json`.

---

## 🧪 Run Cypress Test Runner

```bash
npx cypress open
```

This opens the Cypress UI where you can run and explore tests.

To run tests in headless mode:

```bash
npx cypress run
```

---

## 📁 Project Structure

```
cypress/
  ├── e2e/            → Your test files
  ├── support/        → Custom commands, reusable logic
  ├── fixtures/       → Static test data (if needed)
  └── screenshots/    → Cypress output (auto-generated)
```

---

## 🌐 Target Website

All tests are written to interact with the public demo site:

🔗 [https://fronttestlab.web.app](https://fronttestlab.web.app)

> You are free to interact, break, test and retry without limits.

---

## ✅ What you'll learn

- How to write Cypress tests using selectors and commands
- How to interact with:

  - Forms (registration & login)
  - Tables (static & dynamic)
  - Modals, buttons, tooltips, notifications
  - Native HTML `<select>` elements
  - Drag and drop areas
  - IFrames with embedded buttons

- How to organize tests using Page Objects and custom commands

---

## 📚 Used in Udemy course

This repo is part of the course:
**"Frontend Automation with Cypress — Test Everything in the FrontTestLab!"**

---

## 🤝 License

MIT — use freely, especially for learning.
