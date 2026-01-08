import { test, expect } from '@playwright/test';
import { RequestLoanPage } from '../../src/ui/pages/loans/RequestLoanPage';
import { requestLoan } from '../../src/ui/pages/steps/loanSteps';

test.describe('Loans - Request Loan', () => {
  test.use({
    allure: {
      parentSuite: 'Parabank',
      suite: 'Loans',
      subSuite: 'Request Loan',
    },
  });

  test('Request valid loan', async ({ page }) => {
    test.info().annotations.push({ type: 'severity', description: 'normal' });

    const loanPage = new RequestLoanPage(page);
    await requestLoan(page, loanPage, {
      amount: 1000,
      downPayment: 100,
      accountFrom: '12345',
    });
    await expect(page.locator(loanPage.successMsg)).toBeVisible();
  });
});
