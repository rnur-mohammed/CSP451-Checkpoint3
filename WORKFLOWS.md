# Workflow Documentation

This document explains the GitHub Actions workflows used in this repository.

---

## 1. CI Pipeline (`ci.yml`)
- **Trigger:** Runs on every push to any branch.
- **Jobs:**
  - **Lint** → Runs ESLint to check code style and quality.  
  - **Test** → Runs Jest tests with coverage.  
  - **Build** → Compiles TypeScript and copies public assets.  
- **Purpose:** Ensures that code quality checks, tests, and builds pass before merging.

---

## 2. Deploy (`deploy.yml`)
- **Trigger:** Runs on push to the `main` branch.
- **Jobs:**
  - Install dependencies.  
  - Run build.  
  - (Simulated) deployment step.  
- **Purpose:** Mimics a deployment pipeline, verifying that production-ready builds succeed.

---

## 3. Scheduled CI (`schedule.yml`)
- **Trigger:**  
  - Runs daily at midnight UTC (cron job).  
  - Can also be triggered manually with `workflow_dispatch`.  
- **Jobs:**
  - Install dependencies.  
  - Run tests.  
- **Purpose:** Provides automated test execution even without new commits, ensuring long-term stability.

---

## 📌 Notes
- All workflows follow **best practices** by keeping jobs modular and reusable.  
- Status badges in the `README.md` display live build status.  
- The setup ensures **CI/CD principles** are met: continuous integration, scheduled verification, and deployment checks.
