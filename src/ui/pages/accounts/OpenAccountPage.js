export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.accountType = '#type';
    this.openBtn = '#openNewAccount';
    this.success = '.ng-scope';
  }

  async open() {
    await this.page.goto(
      'https://parabank.parasoft.com/parabank/openaccount.htm',
    );
  }
}
