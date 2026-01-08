export class ForgotLoginPage {
  constructor(page) {
    this.page = page;
    this.ssn = '#ssn';
    this.findBtn = 'input[value="Find My Login Info"]';
    this.result = 'table';
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
  }
}
