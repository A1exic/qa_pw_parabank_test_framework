export class BillPayPage {
  constructor(page) {
    this.page = page;
    this.payeeName = '#payee.name';
    this.address = '#payee.address.street';
    this.city = '#payee.address.city';
    this.state = '#payee.address.state';
    this.zip = '#payee.address.zipCode';
    this.phone = '#payee.phoneNumber';
    this.account = '#payee.accountNumber';
    this.verify = '#verifyAccount';
    this.amount = '#amount';
    this.send = 'input[value="Send Payment"]';
    this.success = 'h1:has-text("Bill Payment Complete")';
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
  }
}
