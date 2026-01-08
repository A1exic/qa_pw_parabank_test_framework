import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { BillPayPage } from '../../src/ui/pages/payments/BillPayPage';
import { loginStep } from '../../src/ui/pages/steps/authSteps';
import { payBill } from '../../src/ui/pages/steps/billPaySteps';
import { validUser } from '../_fixtures/user.fixture';

const billData = {
  name: 'Test',
  address: 'Addr',
  city: 'City',
  state: 'St',
  zip: '0000',
  phone: '555',
  account: '7777',
  amount: '10',
};

test.describe('Payments - Bill Pay', () => {
  test.use({
    allure: {
      parentSuite: 'Parabank',
      suite: 'Payments',
      subSuite: 'Bill Pay',
    },
  });

  test('Pay bill successfully', async ({ page }) => {
    test.info().annotations.push({
      type: 'severity',
      description: 'critical',
    });

    const loginPage = new LoginPage(page);
    const billPayPage = new BillPayPage(page);

    await loginStep(page, loginPage, validUser);
    await payBill(page, billPayPage, billData);

    await expect(page.locator(billPayPage.success)).toBeVisible();
  });
});
