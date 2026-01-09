import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { RequestLoanPage } from '../../src/ui/pages/loans/RequestLoanPage';
import { loginStep } from '../../src/ui/pages/steps/authSteps';
import { requestLoan } from '../../src/ui/pages/steps/loanSteps';
import { validUser } from '../_fixtures/user.fixture';

test.describe('Loans - Request Loan', () => {
  test('Request valid loan', async ({ page }) => {
    allure.parentSuite('Parabank');
    allure.suite('Loans');
    allure.subSuite('Request Loan');
    allure.severity(Severity.NORMAL);

    const loginPage = new LoginPage(page);
    const loanPage = new RequestLoanPage(page);

    await test.step('Login as valid user', async () => {
      await loginStep(page, loginPage, validUser);
    });

    await test.step('Request loan', async () => {
      await requestLoan(page, loanPage, {
        amount: 1000,
        downPayment: 100,
        accountFrom: '12345',
      });
    });

    await test.step('Verify loan request success', async () => {
      await expect(page.locator(loanPage.successMsg)).toBeVisible();
    });
  });
});
