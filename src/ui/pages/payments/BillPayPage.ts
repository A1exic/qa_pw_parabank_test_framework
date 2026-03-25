import { Page, Locator } from '@playwright/test';

export class BillPayPage {
  readonly page: Page;

  readonly payeeName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zip: Locator;
  readonly phone: Locator;
  readonly account: Locator;
  readonly verify: Locator;
  readonly amount: Locator;
  readonly send: Locator;
  readonly success: Locator;

  constructor(page: Page) {
    this.page = page;

    this.payeeName = page.locator('input[name="payee.name"]');
    this.address = page.locator('input[name="payee.address.street"]');
    this.city = page.locator('input[name="payee.address.city"]');
    this.state = page.locator('input[name="payee.address.state"]');
    this.zip = page.locator('input[name="payee.address.zipCode"]');
    this.phone = page.locator('input[name="payee.phoneNumber"]');
    this.account = page.locator('input[name="payee.accountNumber"]');
    this.verify = page.locator('input[name="verifyAccount"]');
    this.amount = page.locator('input[name="amount"]');
    this.send = page.locator('input[value="Send Payment"]');

    this.success = page.locator('text=Bill Payment Complete');
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
  }
}
