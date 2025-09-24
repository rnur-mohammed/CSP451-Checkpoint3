# CSP451 - CheckPoint 3

This repository contains the work for **Checkpoint 3** of the CSP451 course.  
It demonstrates GitHub Actions workflows for continuous integration, deployment, and scheduled jobs.

## ✅ Status Badges

![CI Pipeline](https://github.com/rnur-mohammed/CSP451-Checkpoint3/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/rnur-mohammed/CSP451-Checkpoint3/actions/workflows/deploy.yml/badge.svg)
![Scheduled CI](https://github.com/rnur-mohammed/CSP451-Checkpoint3/actions/workflows/schedule.yml/badge.svg)

## 🚀 Workflows

- **CI Pipeline (`ci.yml`)**  
  Runs linting, testing, and build on each push. Ensures code quality and functionality.

- **Deploy (`deploy.yml`)**  
  Runs on push to `main` branch. Simulates deployment after a successful build.

- **Scheduled CI (`schedule.yml`)**  
  Runs daily (cron job) and also manually with `workflow_dispatch`. Ensures tests run regularly.

---

## 📂 Repository Deliverables
- [x] Repository with 3+ workflow files  
- [x] Screenshot of successful workflow runs  
- [x] Actions tab with green checkmarks  
- [x] README with status badges  
- [x] Workflow documentation file  

---
