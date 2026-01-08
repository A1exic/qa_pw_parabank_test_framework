export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#username';
    this.password = '#password';
    this.loginBtn = 'input[type="submit"]';
    this.error = '.error';
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }
}
