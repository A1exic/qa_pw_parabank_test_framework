export class RequestLoanPage {
  constructor(page) {
    this.page = page;
    this.amount = '#amount';
    this.downPayment = '#downPayment';
    this.accountFrom = '#fromAccountId';
    this.applyBtn = 'input[value="Apply Now"]';
    this.successMsg = 'h1:has-text("Loan Request Processed")';
  }

  async open() {
    await this.page.goto(
      'https://parabank.parasoft.com/parabank/requestloan.htm',
    );
  }
}
