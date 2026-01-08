export class AccountDetailsPage {
  constructor(page) {
    this.page = page;
    this.activityTab = 'a:text("Account Activity")';
    this.transactionRows = '#transactionTable tbody tr';
    this.filterType = '#type';
    this.filterBtn = 'button:text("Filter")';
  }
}
