import { Page, Locator } from '@playwright/test';

export class BillPayPage {
  page: Page;
  payeeName: Locator;
  address: Locator;
  city: Locator;
  state: Locator;
  zip: Locator;
  phone: Locator;
  account: Locator;
  verify: Locator;
  amount: Locator;
  send: Locator;
  success: Locator;

  constructor(page: Page) {
    this.page = page;
    this.payeeName = page.locator('#payeeName');
    this.address = page.locator('#address');
    this.city = page.locator('#city');
    this.state = page.locator('#state');
    this.zip = page.locator('#zipCode');
    this.phone = page.locator('#phone');
    this.account = page.locator('#account');
    this.verify = page.locator('#verifyAccount');
    this.amount = page.locator('#amount');
    this.send = page.locator('input[value="Send Payment"]');
    this.success = page.locator('p:has-text("Bill Payment Complete")');
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
  }
}
