export class AccountOverviewPage {
  constructor(page) {
    this.page = page;
    this.accountsTable = '#accountTable';
  }

  async open() {
    await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm');
  }
}
