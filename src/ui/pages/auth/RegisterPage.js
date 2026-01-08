export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#customer.firstName';
    this.lastName = '#customer.lastName';
    this.address = '#customer.address.street';
    this.city = '#customer.address.city';
    this.state = '#customer.address.state';
    this.zip = '#customer.address.zipCode';
    this.phone = '#customer.phoneNumber';
    this.ssn = '#customer.ssn';
    this.username = '#customer.username';
    this.password = '#customer.password';
    this.confirm = '#repeatedPassword';
    this.registerBtn = 'input[value="Register"]';
    this.successMsg = 'p:has-text("Your account was created successfully")';
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
  }
}
