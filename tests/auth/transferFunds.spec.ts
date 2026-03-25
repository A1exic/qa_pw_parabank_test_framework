import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';
import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { TransferFundsPage } from '../../src/ui/pages/payments/TransferFundsPage';
import { loginStep } from '../../src/ui/pages/steps/authSteps';
import { transferFunds } from '../../src/ui/pages/steps/paymentSteps';
import { validUser } from '../_fixtures/user.fixture';

test.describe('Payments - Transfer Funds', () => {
  test('Transfer funds successfully', async ({ page }) => {
    allure.parentSuite('Parabank');
    allure.suite('Payments');
    allure.subSuite('Transfer Funds');
    allure.severity(Severity.CRITICAL);

    const loginPage = new LoginPage(page);
    const transferPage = new TransferFundsPage(page);

    await loginStep(page, loginPage, validUser);
    await transferFunds(page, transferPage, 100);
    await expect(transferPage.successMsg).toBeVisible();
  });
});
