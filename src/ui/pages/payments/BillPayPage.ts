import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerBtn: Locator;
  readonly successMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[id="customer.username"]');
    this.passwordInput = page.locator('input[id="customer.password"]');
    this.confirmPasswordInput = page.locator('input[id="repeatedPassword"]');
    this.registerBtn = page.locator('input[value="Register"]');
    this.successMsg = page.locator(
      'p:has-text("Your account was created successfully")',
    );
  }

  async open() {
    await this.page.goto('/parabank/register.htm');
  }
}
