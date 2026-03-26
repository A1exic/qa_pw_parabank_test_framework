import { Page, Locator } from '@playwright/test';

export class ForgotLoginPage {
  readonly page: Page;
  readonly ssn: Locator;
  readonly findBtn: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ssn = page.locator('#ssn');
    this.findBtn = page.locator('input[value="Find My Login Info"]');
    this.result = page.locator('table');
  }

  async open(): Promise<void> {
    await this.page.goto('/parabank/lookup.htm');
  }

  async fillSsn(ssn: string): Promise<void> {
    await this.ssn.fill(ssn);
  }

  async clickFindButton(): Promise<void> {
    await this.findBtn.click();
  }

  async assertResultIsVisible(): Promise<void> {
    await this.result.waitFor({ state: 'visible' });
  }
}
