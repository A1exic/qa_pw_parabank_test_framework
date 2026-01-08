import { test, expect } from '@playwright/test';
import { TransferFundsPage } from '../../src/ui/pages/payments/TransferFundsPage';
import { transferFunds } from '../../src/ui/pages/steps/paymentSteps';

const amounts = [0, -10, 1000000000];

test.describe('Payments - Transfer Funds', () => {
  test.use({
    allure: {
      parentSuite: 'Parabank',
      suite: 'Payments',
      subSuite: 'Transfer Funds',
    },
  });

  for (const amount of amounts) {
    test(`Transfer funds amount ${amount}`, async ({ page }) => {
      test
        .info()
        .annotations.push({ type: 'severity', description: 'critical' });

      const transferPage = new TransferFundsPage(page);
      await transferFunds(page, transferPage, '12345', '12346', amount);
      // expect error or warning
    });
  }
});
