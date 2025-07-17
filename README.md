# Cypress Visual Testing Example

This project demonstrates **visual regression testing** using [Cypress](https://www.cypress.io/) and the [cypress-image-snapshot](https://github.com/jaredpalmer/cypress-image-snapshot) plugin.

## What is Visual Testing?

Visual testing (or visual regression testing) is a technique to automatically detect visual changes in your application's UI. It works by taking screenshots of web pages or components and comparing them to baseline images. If there are unexpected differences, the test will fail, helping you catch unintended UI changes.

## Project Structure

- `cypress/e2e/`  
  Contains end-to-end test files, e.g.:
  - `homepage.cy.js`: Visual tests for the dashboard/home page.
- `cypress/support/commands.js`  
  Custom Cypress commands, including login and base URL navigation, and image snapshot commands.
- `.github/workflows/cypress.yml`  
  GitHub Actions workflow for running Cypress tests automatically on pushes to `main`.
- `cypress/snapshots/`  
  Stores baseline and diff images for visual regression.
- `cypress.config.js`  
  Cypress configuration, including image snapshot plugin setup.

## Setup

1. **Clone the repository**  
   ```sh
   git clone https://github.com/Muyundo/demo-opecart-visual-testing.git
   cd demo-opencart-visual-testing
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

## How to Run Visual Tests Locally

1. **Open Cypress Test Runner**  
   ```sh
   npx cypress open
   ```
   or run headlessly:
   ```sh
   npx cypress run
   ```

2. **View Results**  
   - Baseline images are stored in `cypress/snapshots/`.
   - If a test fails due to a visual difference, a diff image is generated in `cypress/snapshots/__diff_output__/`.

## Continuous Integration (CI) with GitHub Actions

This project includes a workflow file at `.github/workflows/cypress.yml` that automatically runs Cypress tests on every push to the `main` branch.

**Key steps in the workflow:**
- Checks out your code.
- Sets up Node.js.
- Installs dependencies.
- Runs Cypress tests in parallel and records results (requires `CYPRESS_RECORD_KEY` secret).

**Example workflow snippet:**
```yaml
name: Cypress Tests
on:
  push:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22.15.0'
      - name: Install dependencies
        run: npm install --force
      - name: Run Cypress tests
        uses: cypress-io/github-action@v6
        with:
          record: true
          parallel: true
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Notes

- Update baseline images by deleting the relevant snapshot and re-running the test if intentional UI changes are made.
- The project uses the [OrangeHRM demo site](https://opensource-demo.orangehrmlive.com/) for
