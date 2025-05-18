# ✅ Playwright LambdaTest Certification Assignment

This project contains the solution for the **LambdaTest Playwright 102 Certification Assignment**. The tests are written using **Playwright with JavaScript** and are executed in **parallel across multiple browser/OS combinations** on the **LambdaTest HyperExecute**.

HyperExecute is a smart test orchestration platform to run end-to-end Playwright tests at the fastest speed possible. HyperExecute lets you achieve an accelerated time to market by providing a test infrastructure that offers optimal speed, test orchestration, and detailed execution logs.


---

## ✅ Test Scenarios Covered in the lambdatest102 file

### 1. Simple Form Demo
- Navigate to the Selenium Playground
- Click on "Simple Form Demo"
- Enter a message and validate the displayed output

### 2. Drag & Drop Sliders
- Navigate to "Drag & Drop Sliders"
- Adjust the slider to 95 using ArrowRight key presses with delays
- Validate the range value

### 3. Input Form Submit
- Attempt form submission with empty fields and assert errors
- Fill in all required fields
- Submit and verify success message

---

## ⚙️ Setup Instructions

### 1. Clone the Repo and Install Dependencies to run in the local machine

```bash
git clone https://github.com/Rijvi-Ahmed/LambdaTest-Playwright-102.git
cd playwright-assignment-102
npm install
npx playwright install
npm run test:lambdatest

```
---

## Create a .env file in the root directory:
LT_USERNAME=your_lambdatest_username
LT_ACCESS_KEY=your_lambdatest_access_key

## Run through Gitpod
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/new/#https://github.com/Rijvi-Ahmed/LambdaTest-Playwright-102.git)

## HyperExecute cmd for hyperexecute.yaml & hyperexecute_autosplits.yaml for windows, mac & linux

```bash
.\hyperexecute --user akash.ru.37 --key LT_feNA9NVxjZkmsiPVrUDzFEHu2vYimSBs79wenpF2Y5U4WwG --config yaml/win/.hyperexecute_matrix.yaml --download-artifacts --force-clean-artifacts
.\hyperexecute --user akash.ru.37 --key LT_feNA9NVxjZkmsiPVrUDzFEHu2vYimSBs79wenpF2Y5U4WwG --config yaml/mac/.hyperexecute_matrix.yaml --download-artifacts --force-clean-artifacts
.\hyperexecute --user akash.ru.37 --key LT_feNA9NVxjZkmsiPVrUDzFEHu2vYimSBs79wenpF2Y5U4WwG --config yaml/linux/.hyperexecute_matrix.yaml --download-artifacts --force-clean-artifacts
.\hyperexecute --user akash.ru.37 --key LT_feNA9NVxjZkmsiPVrUDzFEHu2vYimSBs79wenpF2Y5U4WwG --config .hyperexecute_autosplits.yaml --download-artifacts --force-clean-artifacts

```
---

## This script runs all tests in parallel across all defined LambdaTest capabilities.