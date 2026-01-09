import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.locator('input[value="Log In"]');
    this.error = page.locator('.error');
  }

  async open() {
    await this.page.goto('/parabank/index.htm');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
