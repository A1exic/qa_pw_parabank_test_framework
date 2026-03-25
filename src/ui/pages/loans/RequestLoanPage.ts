import { Page, Locator } from '@playwright/test';

export class RequestLoanPage {
  readonly page: Page;
  readonly amount: Locator;
  readonly downPayment: Locator;
  readonly accountFrom: Locator;
  readonly applyBtn: Locator;
  readonly successMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.amount = page.locator('#amount');
    this.downPayment = page.locator('#downPayment');
    this.accountFrom = page.locator('#fromAccountId');
    this.applyBtn = page.locator('input[value="Apply Now"]');
    this.successMsg = page.locator('h1:has-text("Loan Request Processed")');
  }

  async open() {
    await this.page.goto(
      'https://parabank.parasoft.com/parabank/requestloan.htm',
    );
  }
}
