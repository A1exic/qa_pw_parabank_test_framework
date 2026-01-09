import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Severity } from 'allure-js-commons';

import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { BillPayPage } from '../../src/ui/pages/payments/BillPayPage';
import { loginStep } from '../../src/ui/pages/steps/authSteps';
import { payBill } from '../../src/ui/pages/steps/billPaySteps';
import { validUser } from '../_fixtures/user.fixture';

test.describe('Payments - Bill Pay', () => {
  test('Pay bill successfully', async ({ page }) => {
    allure.parentSuite('Parabank');
    allure.suite('Payments');
    allure.subSuite('Bill Pay');
    allure.severity(Severity.CRITICAL);

    const loginPage = new LoginPage(page);
    const billPayPage = new BillPayPage(page);

    await test.step('Login as valid user', async () => {
      await loginStep(page, loginPage, validUser);
    });

    await test.step('Pay bill', async () => {
      await payBill(page, billPayPage, {
        name: 'Test',
        address: 'Addr',
        city: 'City',
        state: 'St',
        zip: '0000',
        phone: '555',
        account: '7777',
        amount: '10',
      });
    });

    await test.step('Verify success message', async () => {
      await expect(page.locator(billPayPage.success)).toBeVisible();
    });
  });
});
