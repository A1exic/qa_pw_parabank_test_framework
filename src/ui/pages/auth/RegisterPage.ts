import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly successMsg: Locator;

  constructor(page: Page) {
    this.page = page;

    this.successMsg = page.locator(
      'p:has-text("Your account was created successfully")',
    );
  }

  async open() {
    await this.page.goto('/parabank/register.htm');
  }
}
