import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { TransferFundsPage } from '../../src/ui/pages/payments/TransferFundsPage';
import { loginStep } from '../../src/ui/pages/steps/authSteps';
import {
  transferFunds,
  verifyTransferValidation,
} from '../../src/ui/pages/steps/paymentSteps';
import { validUser } from '../_fixtures/user.fixture';

const invalidAmounts = [0, -10, 1_000_000_000];

test.describe('Payments - Transfer Funds', () => {
  for (const amount of invalidAmounts) {
    test(`Transfer funds with invalid amount: ${amount}`, async ({ page }) => {
      allure.parentSuite('Parabank');
      allure.suite('Payments');
      allure.subSuite('Transfer Funds');
      allure.severity(Severity.CRITICAL);

      const loginPage = new LoginPage(page);
      const transferPage = new TransferFundsPage(page);

      await test.step('Login as valid user', async () => {
        await loginStep(page, loginPage, validUser);
      });

      await test.step(`Attempt transfer with amount ${amount}`, async () => {
        await transferFunds(page, transferPage, '12345', '12346', amount);
      });

      await test.step('Verify transfer validation', async () => {
        await verifyTransferValidation(page, transferPage);
      });
    });
  }
});
