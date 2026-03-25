import { Page, Locator } from '@playwright/test';

export class TransferFundsPage {
  readonly page: Page;
  readonly fromAccount: Locator;
  readonly toAccount: Locator;
  readonly amountInput: Locator;
  readonly transferBtn: Locator;
  readonly successMsg: Locator;
  readonly errorMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fromAccount = page.locator('#fromAccountId');
    this.toAccount = page.locator('#toAccountId');
    this.amountInput = page.locator('#amount');
    this.transferBtn = page.locator('input[value="Transfer"]');
    this.successMsg = page.locator('h1:has-text("Transfer Complete")');
    this.errorMsg = page.locator('.error');
  }

  async open() {
    await this.page.goto('/parabank/transfer.htm');
  }
}
