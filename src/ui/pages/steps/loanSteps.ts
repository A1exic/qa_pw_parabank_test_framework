import { Page } from '@playwright/test';
export class RequestLoanPage {
  page: Page;
  amount: string;
  downPayment: string;
  accountFrom: string;
  applyBtn: string;
  successMsg: string;

  constructor(page: Page) {
    this.page = page;
    this.amount = '#amount';
    this.downPayment = '#downPayment';
    this.accountFrom = '#fromAccountId';
    this.applyBtn = 'input[value="Apply Now"]';
    this.successMsg = 'h1:has-text("Loan Request Processed")';
  }
}
