import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/auth/LoginPage';
import { AccountDetailsPage } from '../../src/ui/pages/accounts/AccountDetailsPage';
import { validUser } from '../_fixtures/user.fixture';

test.describe('Find Transactions', () => {
  let loginPage: LoginPage;
  let accountDetailsPage: AccountDetailsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    accountDetailsPage = new AccountDetailsPage(page);
    await loginPage.open();
    await loginPage.signIn(validUser.username, validUser.password);
  });

  test('Find transaction by amount', async ({ page }) => {
    await accountDetailsPage.open('12345');
    await accountDetailsPage.filterByType.selectOption('DEBIT');
    await accountDetailsPage.filterButton.click();
    await expect(accountDetailsPage.transactionRows.first()).toBeVisible();
  });
});
