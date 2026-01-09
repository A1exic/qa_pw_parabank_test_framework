import { Page, Locator } from '@playwright/test';

export class AccountDetailsPage {
  page: Page;
  activityTab: Locator;
  transactionRows: Locator;
  filterType: Locator;
  filterBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activityTab = page.locator('a:text("Account Activity")');
    this.transactionRows = page.locator('#transactionTable tbody tr');
    this.filterType = page.locator('#type');
    this.filterBtn = page.locator('button:text("Filter")');
  }

  async open(accountId: string) {
    await this.page.goto(
      `https://parabank.parasoft.com/parabank/accountdetails.htm?id=${accountId}`,
    );
  }
}
