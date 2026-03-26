import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zip: Locator;
  readonly phone: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirm: Locator;
  readonly registerBtn: Locator;
  readonly successMsg: Locator;
  readonly errorMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('input[name="customer.firstName"]');
    this.lastName = page.locator('input[name="customer.lastName"]');
    this.address = page.locator('input[name="customer.address.street"]');
    this.city = page.locator('input[name="customer.address.city"]');
    this.state = page.locator('input[name="customer.address.state"]');
    this.zip = page.locator('input[name="customer.address.zipCode"]');
    this.phone = page.locator('input[name="customer.phoneNumber"]');
    this.ssn = page.locator('input[name="customer.ssn"]');
    this.username = page.locator('input[name="customer.username"]');
    this.password = page.locator('input[name="customer.password"]');
    this.confirm = page.locator('input[name="repeatedPassword"]');
    this.registerBtn = page.locator('input[value="Register"]');
    this.successMsg = page.locator('p:has-text("Your account was created")');
    this.errorMsg = page.locator('.error');
  }

  async open(): Promise<void> {
    await this.page.goto('/parabank/register.htm');
  }

  async registerUser(data: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
    confirm: string;
  }): Promise<void> {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.address.fill(data.address);
    await this.city.fill(data.city);
    await this.state.fill(data.state);
    await this.zip.fill(data.zip);
    await this.phone.fill(data.phone);
    await this.ssn.fill(data.ssn);
    await this.username.fill(data.username);
    await this.password.fill(data.password);
    await this.confirm.fill(data.confirm);
    await this.registerBtn.click();
  }

  async assertRegistrationSuccessful(): Promise<void> {
    await expect(this.successMsg).toBeVisible({ timeout: 15000 });
  }

  async assertRegistrationError(): Promise<void> {
    await expect(this.errorMsg).toBeVisible();
  }
}
