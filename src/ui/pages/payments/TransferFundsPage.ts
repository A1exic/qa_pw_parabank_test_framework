import { Page } from '@playwright/test';

export class TransferFundsPage {
  readonly page: Page;
  readonly fromAccount: string;
  readonly toAccount: string;
  readonly amount: string;

  constructor(page: Page) {
    this.page = page;
    this.fromAccount = '#fromAccountId';
    this.toAccount = '#toAccountId';
    this.amount = '#amount';
  }
}
