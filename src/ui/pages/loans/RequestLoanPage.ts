import { Page } from '@playwright/test'; // if using Playwright

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

  async open() {
    await this.page.goto(
      'https://parabank.parasoft.com/parabank/requestloan.htm',
    );
  }
}
