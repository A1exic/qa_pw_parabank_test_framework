export class TransferFundsPage {
  constructor(page) {
    this.page = page;
    this.fromAccount = '#fromAccountId';
    this.toAccount = '#toAccountId';
    this.amount = '#amount';
    this.transferBtn = 'input[value="Transfer"]';
    this.successMsg = 'h1:has-text("Transfer Complete!")';
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/transfer.htm');
  }
}
