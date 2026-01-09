import { Page, Locator } from '@playwright/test';

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('input[value="Log In"]');
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/login.htm');
  }
}
