import { Page, Locator } from '@playwright/test';

export class AccountDetailsPage {
  readonly page: Page;
  readonly filterType: Locator;
  readonly filterBtn: Locator;
  readonly transactionRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterType = page.locator('#transactionType');
    this.filterBtn = page.locator('button#filter');
    this.transactionRows = page.locator('table#transactions tr');
  }

  async open(accountId: string): Promise<void> {
    await this.page.goto(`/parabank/accountdetails.htm?id=${accountId}`);
  }
}
