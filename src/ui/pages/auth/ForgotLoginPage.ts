import { Page } from '@playwright/test'; // If you’re using Playwright

export class ForgotLoginPage {
  page: Page;
  ssn: string;
  findBtn: string;
  result: string;

  constructor(page: Page) {
    this.page = page;
    this.ssn = '#ssn';
    this.findBtn = 'input[value="Find My Login Info"]';
    this.result = 'table';
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
  }
}
