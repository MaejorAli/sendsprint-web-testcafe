# TestCafe Test Automation Project

This project contains TestCafe test scripts to automate various flows, such as logging in, sending money, and payment verification, on the [SendSprint platform](https://frontendstaging.sendsprint.com/).


## Project Overview

This project automates the testing of SendSprint's platform using TestCafe, covering:
- Login functionality.
- Sending money to recipients.
- Payment methods (e.g., Pay with Stripe).
- Verifying successful transactions.

The tests are designed to ensure the reliability and stability of critical user flows.


## Setup and Installation

1. **Prerequisites**:
   - Node.js (version 14 or higher)
   - TestCafe (installed globally or locally)

2. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd testcafe-test-project
   

3. **Install Dependencies**:
  ```bash
  - npm install
  ```

4. **Project Structure**:
```bash
testcafe-test-project/
├── tests/
│   ├──tests.js
├── .testcaferc.json
├── package.json
├── README.md
└── .gitignore
```

5. **Run all tests**:
 ```bash
  - npm test
