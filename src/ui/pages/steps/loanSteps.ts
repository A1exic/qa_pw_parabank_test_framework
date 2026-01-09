import { Page } from '@playwright/test';
import { RequestLoanPage } from '../loans/RequestLoanPage';

interface LoanData {
  amount: number;
  downPayment: number;
  accountFrom: string;
}

export async function requestLoan(
  page: Page,
  loanPage: RequestLoanPage,
  data: LoanData,
) {
  await loanPage.open();

  // Используем локаторы напрямую через Page Object
  await page.fill(loanPage.amount, data.amount.toString());
  await page.fill(loanPage.downPayment, data.downPayment.toString());
  await page.selectOption(loanPage.accountFrom, data.accountFrom);
  await page.click(loanPage.applyBtn);
}
